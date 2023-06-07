const leia = require("prompt-sync")()

let valor1 = 0
let valor2 = 0
let nome = leia("Qual é o seu nome?")

//o prompt-sync interpreta tudo em caracteres, portanto, é necessário colocar o parseInt(números inteiros) antes do "leia" e isolá-lo em parênteses
valor1 = parseInt(leia("Digite o valor 1: "))
valor2 = parseInt(leia("Digite o valor 2: "))

//toUpperCase serve para exibir o que o usuário digitar em letras maiúsculas
console.log("Oi, "+nome.toUpperCase()+"! A soma dos valores é igual a: "+(valor1+valor2))

//nome.length serve para mostrar a quantidade de caracteres que tem no nome 
console.log(nome.length)

