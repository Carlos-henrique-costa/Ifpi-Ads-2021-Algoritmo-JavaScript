const prompt = require('prompt-sync')();

//Entrada
const km = Number(prompt('Digite o valor em quilometros: '))

//Processamento
const metros = km * 1000

//Saida
console.log('O valor em metros é: ', metros)