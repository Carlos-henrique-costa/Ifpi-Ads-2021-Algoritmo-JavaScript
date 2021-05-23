const prompt = require('prompt-sync')();

//Entrada
const x1 = Number(prompt('Digite o valor de X1: '))
const y1 = Number(prompt('Digite o valor de Y1: '))
const x2 = Number(prompt('Digite o valor de X2: '))
const y2 = Number(prompt('Digite o valor de Y2: '))

//Processamento
const potencia = Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2)
const d = Math.sqrt(potencia)

//Saida
console.log('A distancia dos pontos é: ', d.toFixed(2))