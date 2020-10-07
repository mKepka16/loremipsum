//Packages
const express = require('express');
const { MongoClient } = require('mongodb');

//Router init
const router = express.Router();

//Constants
const URI = "mongodb+srv://misiekpl03:kepkapl2003@mongodb1.cavku.mongodb.net/loremipsum?retryWrites=true&w=majority";

//Routes
router.get('/chatData', (req, res, next) => {
    const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(async err => {
        const collection = client.db().collection("users");
        const searchCursor = collection.find();
        const results = await searchCursor.toArray();

        res.status(200).send({response: results});

        client.close();

        if(err) {
            res.status(500).send("error: "+err.message);
        }
    });
})

//Export
module.exports = router;

