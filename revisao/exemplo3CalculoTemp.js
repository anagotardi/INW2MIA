const leia = require("prompt-sync")()

//o prompt-sync interpreta tudo em caracteres, portanto, é necessário colocar o parseFloat(números quebrados) antes do "leia" e isolá-lo em parênteses
let nome = leia("Qual é o seu nome? ")
let celsius = parseFloat(leia("Digite a temperatura em celsius: "))
let kelvin = parseFloat(celsius + 273)

//toUpperCase serve para exibir o que o usuário digitar em letras maiúsculas
console.log("Oi, "+nome.toUpperCase()+". A temperatura em celsius é: "+celsius+". A temperatura em kelvin é:" +kelvin)


