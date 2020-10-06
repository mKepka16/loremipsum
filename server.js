//Packages
const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://misiekpl03:kepkapl2003@mongodb1.cavku.mongodb.net/loremipsum?retryWrites=true&w=majority";

//App init
const app = express();

app.get('/api/chatData', (req, res, next) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
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


if(process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

//Server starting
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));