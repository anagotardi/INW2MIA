//classe mãe

class Animal{
    constructor(tipo, porte, femea, nascimento){
        this.tipo = tipo;
        this.porte = porte;
        this.femea = femea;
        this.nascimento = nascimento
    }

    fazerBarulho(){
        console.log("Fazendo barulho...")
    }

    retornarIdade(anoAtual){
        return anoAtual - this.nascimento
    }

}

//criando uma subclassse. extends = extensão, tudo que tem na classe Animal também terá na classe Gato. super = referencia à classe mãe (Animal)

class Gato extends Animal{
    constructor(tipo,raca, cor){
        super(tipo);
        this.raca = raca;
        this.cor = cor
    }

    miar(){
        console.log("Miauuuuuu...")
    }

}

//subclasse Cachorro

class Cachorro extends Animal{
    constructor(tipo,raca,cor){
        super(tipo);
        this.raca = raca;
        this.cor = cor
    }

    latir(){
        console.log("Au au au au...")
    }
    
}

//programa principal, criando variáveis e chamado os métodos

let bicho1 = new Animal("mamífero","médio",false,2020)
let frajola = new Gato("felino","sphynx","preto")
let maruska = new Cachorro("canino","rottweiler","preto")

//console.log(bicho1)
console.log(bicho1.porte)
bicho1.fazerBarulho()
frajola.fazerBarulho()
frajola.miar()
maruska.fazerBarulho()
maruska.latir()
maruska.nascimento = 2021
console.log("A idade é "+maruska.retornarIdade(2023))
frajola.nascimento = 2020
console.log("A idade é "+frajola.retornarIdade(2023))


