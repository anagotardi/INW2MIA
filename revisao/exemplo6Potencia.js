const leia = require("prompt-sync")()

//programa de potenciação

let numero
numero = parseInt (leia("Digite um número: "))

console.log(+numero+" ao cubo é: "+(Math.pow(numero,3)))