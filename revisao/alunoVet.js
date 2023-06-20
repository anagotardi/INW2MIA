const leia = require("prompt-sync")()

//Vetores. Para achar um item dentro de um vetor, é necessário colocar os [] e o número da posição. Sempre começa do 0, ou seja, neste caso, o MARCOS é a posição 0, PAULO é a posição 1, e MARIA é a posição 2

let alunos = ["MARCOS", "PAULO", "MARIA"]
let matriculas = ["MAT1", "MAT2", "MAT3"]
let notas = [0,0,0]
let situacao

notas[0] = 5
notas[1] = 6
notas[2] = 9


for(let i=0; i<3; i++){
    notas[i] = parseInt(leia("Digite a nota do aluno: "))
}
console.log("MAT\tALUNO\tNOTA")
for(let i=0; i<alunos.length; i++){
    if(notas[i]>=5){
        situacao = 'Aprovado'
    }
    else{
        situacao = 'Recuperação'
    }
    console.log(matriculas[i]+'\t'+alunos[i]+'\t'+notas[i]+'\t'+situacao)
}

console.log("Mudando a nota do aluno")
let auxMat = leia("Digite a matricula do aluno: ")
for(let i=0; i<alunos.length; i++){
    if(auxMat == matriculas[i]){
        console.log("Aluno escolhido: "+alunos[i])
        notas[i] = parseInt(leia("Digite a nova nota do aluno: "))
    }
}

console.log("MAT/tALUNO\tNOTA")
for(let i=0; i<alunos.length; i++){
    if(notas[i]>=5){
        situacao = 'Aprovado'
    }
    else{
        situacao = 'Recuperação'
    }
console.log(matriculas[i]+'\t'+alunos[i]+'\t'+notas[i]+'\t'+situacao)

}
