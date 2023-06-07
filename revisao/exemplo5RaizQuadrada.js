const leia = require("prompt-sync")()

//programa de raiz quadrada

let numero 
numero = parseInt(leia("Digite um número: "))

console.log("A raiz quadrada de "+numero+" é: "+(Math.sqrt(numero)))