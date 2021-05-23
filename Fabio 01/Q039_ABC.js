const prompt = require('prompt-sync')();

//Entrada
const a = Number(prompt('Digite o valor de A: '))
const b = Number(prompt('Digite o valor de B: '))
const c = Number(prompt('Digite o valor de C: '))

//Processamento
const r = Math.pow(a + b, 2)
const s = Math.pow(b + c, 2)

const d = (r + s) / 2

//Saida
console.log('O resultado da expressão D = (R + S)/2 é: ', d)