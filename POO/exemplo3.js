class Pessoa{
    constructor(cpf,nome,anoNascimento){
        this.cpf = cpf;
        this.nome = nome;
        this.anoNascimento = anoNascimento

    }

    mostraIdade(){
        console.log("Sua idade é: "+(2023-this.anoNascimento))
    }

}

//programa principal

let cliente1 = new Pessoa("111.222.333-44","Marcos",1974)
let cliente2 = new Pessoa("222.444.555-33","Maria",2003)

console.log(cliente1)
cliente1.mostraIdade()
console.log(cliente1.nome)

console.log(cliente2)
cliente2.mostraIdade()
console.log(cliente2.nome)