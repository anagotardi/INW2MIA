//conecar o mongodb na maquina (net start mongodb), conectar no cmd prompt ou no git bash
//link do endereço do mongodb:
//mongodb://localhost:27017 

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/teste', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console,'connection error: '));

db.once('open', function(){
    console.log("Estamos conectados ao banco")
})
