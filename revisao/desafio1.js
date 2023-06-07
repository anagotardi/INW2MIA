const leia = require("prompt-sync")()

//escreva um sistema que leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão: D = R+S/2, onde R=(A + B)^2 e S=(B + C)^2

let A 
let B 
let C

A = parseInt(leia("Digite o um valor para o A: "))
B = parseInt(leia("Digite um valor para o B: "))
C = parseInt(leia("Digite um valor para o C: "))

let soma1 = parseInt(A+B)
let soma2 = parseInt(B+C)

let valorR = (Math.pow(soma1,2))
let valorS = (Math.pow(soma2,2))

let valorD = (valorR+valorS)/2

console.log("O valor de D é = "+valorD)
