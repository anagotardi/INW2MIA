const leia = require("prompt-sync")()

//construa um programa em C que, tendo como dados de entrada dois pontos quaisquer no plano, P(x1, y1) e P(x2, y2), escreva a distância entre eles. A fórmula é: D =raiz de(x2 - x1)^2 + (y2 - y1)^2

let x1 = parseInt(leia("Digite um valor para x1: "))
let x2 = parseInt(leia("Digite um valor para x2: "))
let y1 = parseInt(leia("Digite um valor para y1: "))
let y2 = parseInt(leia("Digite um valor para y2: "))

let sub1 = (x2 - x1)
let sub2 = (y2 - y1)

let potencia1 = (Math.pow(sub1,2))
let potencia2 = (Math.pow(sub2,2))

let soma3 = (potencia1 + potencia2)

console.log("O valor de D é: "+ Math.sqrt(soma3))
