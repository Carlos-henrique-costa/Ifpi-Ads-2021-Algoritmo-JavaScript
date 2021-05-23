const prompt = require('prompt-sync')();

//Entrada
const numero1 = Number(prompt('Digite o primeiro numero: '))
const numero2 = Number(prompt('Digite o primeiro numero: '))
const numero3 = Number(prompt('Digite o primeiro numero: '))

//Processamento
const media = (numero1 + numero2 + numero3) /3

//Saida
console.log('A media dos numeros é: ', media)