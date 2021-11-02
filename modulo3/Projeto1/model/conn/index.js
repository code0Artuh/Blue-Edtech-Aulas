const mongoose = require('mongoose');

function Conn(){
    const { MongoClient } = require('mongodb');
    const uri = "mongodb+srv://827581354455:827581354455@cluster0.svrkx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      client.close();
    });
};

console.log("MongoDB conectado")

module.exports = Conn;