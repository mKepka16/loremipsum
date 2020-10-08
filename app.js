//Packages
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');
const morgan = require('morgan');

//Router init
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(morgan('dev'));

//Constants
const URI = "mongodb+srv://misiekpl03:kepkapl2003@mongodb1.cavku.mongodb.net/loremipsum?retryWrites=true&w=majority";

//Routes
router.use(async (req, res, next) => {
    try {
        req.client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });
        await req.client.connect();
        req.collection = req.client.db().collection("users");
        next();
    }
    catch(ex) {
        next(ex);
    }
});

router.get('/user/:id', async (req, res, next) => {
    const { id } = req.params;

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

router.put('/user/:id', async (req, res, next) => {
    const { body } = req;
    const { id } = req.params;

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

//Export
module.exports = router;

