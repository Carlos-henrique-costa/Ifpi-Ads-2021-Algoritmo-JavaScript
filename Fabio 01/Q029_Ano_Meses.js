const prompt = require('prompt-sync')();

//Entrada
const meses = Number(prompt('Digite um numero inteiro em meses: '))

//Processamento
const anos = parseInt(meses / 12)
const mes = parseInt(meses % 12)

//Saida
console.log('O equivalente é: ', anos,'Anos e', mes, 'meses')