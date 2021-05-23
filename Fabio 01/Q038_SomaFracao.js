const prompt = require('prompt-sync')();

//Entrada
const numerador1 = Number(prompt('Digite o primeiro numerador: '))
const denominador1 = Number(prompt('Digite o primeiro denominador: '))
const numerador2 = Number(prompt('Digite o segundo numerador: '))
const denominador2 = Number(prompt('Digite o segundo denominador: '))

//Processamento
const numerador = (numerador1 * denominador2)+(numerador2 * denominador1)
const denominador = denominador1 * denominador2

//Saida
console.log('O resultado da fração é:', numerador, '/', denominador)