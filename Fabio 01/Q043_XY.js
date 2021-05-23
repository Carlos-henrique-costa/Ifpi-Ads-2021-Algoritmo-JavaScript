const prompt = require('prompt-sync')();

//Entrada
const valorA = Number(prompt('Digite o valor de A: '))
const valorB = Number(prompt('Digite o valor de B: '))
const valorC = Number(prompt('Digite o valor de C: '))
const valorD = Number(prompt('Digite o valor de D: '))
const valorE = Number(prompt('Digite o valor de E: '))
const valorF = Number(prompt('Digite o valor de F: '))

//Processamento
const valorX = (((valorC * valorE) - (valorB * valorF)) / ((valorA * valorE) - (valorB * valorD))).toFixed(3)
const valorY = (((valorA * valorF) - (valorC * valorD)) / ((valorA * valorE) - (valorB * valorD))).toFixed(3)


//Saida
console.log('O valor de X é: ', valorX, 'O valor de Y é: ', valorY)