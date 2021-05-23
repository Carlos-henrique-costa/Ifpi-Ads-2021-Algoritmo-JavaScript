const prompt = require('prompt-sync')();

//Entrada
const kg = Number(prompt('Digite o valor em kg: '))

//Processamento
const grama = kg * 1000

//Saida
console.log('O valor em gramas é: ', grama)