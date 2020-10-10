//Packages
require('dotenv').config();

const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { mongoURI } = require('./config/keys');

//Router init
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(morgan('dev'));

//Routes
router.use(async (req, res, next) => {
    try {
        req.client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        await req.client.connect();
        req.collection = req.client.db().collection("users");
        next();
    }
    catch(err) {
        next(err);
    }
});

router.post('/register', async (req, res, next) => {
    try {
        const { login, password } = req.body;

        const searchCursor = req.collection.find({
            eMail: login
        }, {
            projection: {
                _id: 1
            }
        });

        const existingUser = await searchCursor.toArray();

        if(existingUser.length != 0) {
            const error = new Error('User is already registered');
            error.status = 404;
            throw error;
        }

        const hashPasword = bcrypt.hashSync(password, 10);

        const newUser = {
            eMail: login,
            password: hashPasword,
            pregnanyStart: null,
            photo: null,
            firstName: null,
            lastName: null,
            age: null,
            height: null,
            weight: null
        }

        const insertCursor = await req.collection.insertOne(newUser);

        res.status(200).send({newUser});
    }
    catch (err) {
        next(err);
    }
});

router.post('/login', async (req, res, next) => {
    try {
        const { login, password } = req.body;

        const searchCursor = req.collection.find({
            eMail: login
        }, {
            projection: {
                _id: 1,
                password: 1
            }
        });

        const existingUser = await searchCursor.toArray();

        if(existingUser.length === 0) {
            const error = new Error('Bad e-mail or password');
            error.status = 404;
            throw error;
        }

        if(!bcrypt.compareSync(password, existingUser[0].password))
            throw new Error('Wrong password');

        user = {
            id: existingUser[0]._id
        }

        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

        res.status(200).send({accessToken});
    }
    catch (err) {
        next(err);
    }
});

router.get('/user', authenticateToken, async (req, res, next) => {
    const { id } = req.user;

    try {
        if(id.length != 12 && id.length != 24) {
            const error = new Error('Id has to be 12 or 24 chars long.');
            error.status = 404;
            throw error;
        }

        const searchCursor = req.collection.find({
            _id: ObjectId(id)
        });

        const user = await searchCursor.toArray();
        if(user.length === 0) {
            const error = new Error('User not found.');
            error.status = 404;
            throw error;
        }
            

        res.status(200).json({user: user[0]});
        req.client.close();
    }
    catch (err) {
        next(err);
    }
});

router.put('/user', authenticateToken, async (req, res, next) => {
    const { body } = req;
    const { id } = req.user;

    try {
        if(id.length != 12 && id.length != 24) {
            const error = new Error('Id has to be 12 or 24 chars long.');
            error.status = 404;
            throw error;
        }

        const updateCursor = await req.collection.updateOne({
            _id: ObjectId(id)
        }, {
            "$set": body
        });
            
        res.status(200).json({updatedContent: body});
        req.client.close();
    }
    catch (err) {
        next(err);
    }
});

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message
        }
    });
    req.client.close();
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    })
};

//Export
module.exports = router;