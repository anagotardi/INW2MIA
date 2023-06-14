//Escreva na tela os números 233 a 496, sendo que entre os números de 300 e 400 devem ser de 5 em 5 e o resto de 3 em 3.

let numero = 233
console.log(numero)

while(numero<=496){
    if(numero>=300 && numero<=400){
        numero = numero + 5
        console.log(numero+" Saltando de 5 em 5")
    }
    else{
        numero = numero + 3
        console.log(numero+" Saltando de 3 em 3")
    }
}

console.log("Fim do programa!")