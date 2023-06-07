const leia = require("prompt-sync")()

//programa onde o usuário digita seu nome, indica seus pronomes, digita sua nota. Se a nota for menor que 5, mostrar que foi reprovado. Se a nota for maior que 5, mostrar que foi aprovado 


let aluno = leia("Digite o nome do(a) aluno(a): ")
let nota = parseInt(leia("Digite a nota do(a) aluno(a) (0-10): "))
let tipo = leia("Digite O para referir-se à alunO, A para referir-se à alunA ou E para referir-se à alunE:").toUpperCase()


if(tipo == "O"){
    if(nota<=5){
        console.log("Olá, "+aluno+". Você não foi aprovado :/ Continue tentando, recupere sua nota na recuperação...")
    }
    
    else{
        console.log("Olá, "+aluno+". Você foi aprovado =D Parabéns, continue assim!")
    }
}

if(tipo == "A"){
    if(nota<=5){
        console.log("Olá, "+aluno+". Você não foi aprovada :/ Continue tentando, recupere sua nota na recuperação...")
    }
    
    else{
        console.log("Olá, "+aluno+". Você foi aprovada =D Parabéns, continue assim!")
    }
}

if(tipo == "E"){
    if(nota<=5){
        console.log("Olá, "+aluno+". Você não foi aprovade :/ Continue tentando, recupere sua nota na recuperação...")
    }
    
    else{
        console.log("Olá, "+aluno+". Você foi aprovade =D Parabéns, continue assim!")
    }
}

