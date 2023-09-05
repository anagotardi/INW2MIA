//conecar o mongodb na maquina (net start mongodb), conectar no cmd prompt ou no git bash
//link do endereço do mongodb:
//mongodb://localhost:27017 

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/exemplo', 
{useNewUrlParser: true, 
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 20000});

const db = mongoose.connection;

db.on('error', console.error.bind(console,'connection error: '));

db.once('open', function(){
    console.log("Estamos conectados ao banco")
})

const pessoaSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    profissao: String
});

const pessoa = mongoose.model('Pessoa', pessoaSchema);

const Ana = new pessoa({
    nome: 'Ana',
    idade: 17,
    profissao: 'Designer'
});

console.log(Ana.nome);
console.log(Ana.idade);
console.log(Ana.profissao);

Ana.save();

