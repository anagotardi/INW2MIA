const leia = require("prompt-sync")()

let auxMat 
let matricula = ["M01","M02","M03","M04"]
let nome = ["Paulo", "Maria", "Pedro","Marcos"]
let nota = [0,0,0,0]
let indice = -1

console.log("MATRÍCULA\tNOME\tNOTA")

for(let i = 0; i < matricula.length; i++){
    console.log(matricula[i]+"\t\t"+nome[i].toUpperCase()+"\t"+nota[i])
}

auxMat = leia("Digite a matrícula do aluno: ").toUpperCase()
console.log(auxMat)

for(let i = 0; i< matricula.length; i++){
    if(auxMat=matricula[i]){
        indice=i
    }
}
if (indice!=-1){
    console.log("O aluno escolhido foi: "+nome[indice])
    nota[indice]=leia("Digite a nota do aluno entre 1 e 10: ")
    console.log(nome[indice]+", sua nota é: "+nota[indice])
}

if(nota[indice]<6){
    console.log(nome[indice]+" sua nota é: "+nota[indice]+". Você está de recuperação.")
}
else{
    console.log(nome[indice]+" sua nota é: "+nota[indice]+". Você está aprovado(a).")
}