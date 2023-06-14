const leia = require("prompt-sync")()

//Peça para o usuário digitar uma quantidade de vezes que ele quer que a sequência se repita, e mostre se os números são pares ou ímpares

let limite = parseInt(leia("Digite um número de vezes: "))

for(let x=1; x<=limite; x++){
    if((x%2)==0){
        console.log(x+" - Número Par")
    }
else{
    console.log(x+" - Número Ímpar")
}

}