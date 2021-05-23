const prompt = require('prompt-sync')();

//Entrada
const lado = Number(prompt('Informe o lado do quadrado: '))

//Processamento
const area = lado * lado

//saida
console.log('A area do quadrado é: ', area)