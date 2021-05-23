const prompt = require('prompt-sync')();

//Entrada
const dia = Number(prompt('Digite um numero em dias: '))

//Processamento
const semanaS = parseInt(dia / 7)
const dias = dia % 7

//Saida
console.log('O total em semanas é: ', semanaS, 'e', dias, 'dias')