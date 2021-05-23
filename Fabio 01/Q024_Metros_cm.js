const prompt = require('prompt-sync')();

//Entrada
const metros = Number(prompt('Digite o valor em metros: '))

//Processamento
const cm = metros * 100

//Saida
console.log('O valor em centimetros é: ', cm)