const prompt = require('prompt-sync')();

//Entrada
const binario = Number(prompt('Digite um valor inteiro de 4 digitos em binario: '))

//Processamento
const decimal = Math.pow(binario, 2)

//Saida
console.log('Decimal: ', decimal)