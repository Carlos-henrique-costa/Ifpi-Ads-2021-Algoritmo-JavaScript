const prompt = require('prompt-sync')();

//Entrada
const base = Number(prompt('Informe a base do triangulo: '))
const altura = Number(prompt('Informe a altura do triangulo: '))

//Processamento
const area = (base * altura)/2

//Saida
console.log('A area do triangulo é: ', area)