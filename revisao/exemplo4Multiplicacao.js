const leia = require("prompt-sync")()

//programa de multiplicar dois valores

let valor1 = parseInt (leia("Digite um primeiro valor: "))
let valor2 = parseInt (leia("Digite um segundo valor: "))

console.log("A multiplicação dos dois valores é: "+(valor1*valor2))