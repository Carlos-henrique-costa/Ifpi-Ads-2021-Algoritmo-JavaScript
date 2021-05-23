const prompt = require('prompt-sync')();

//Entrada
const metros = Number(prompt('Digite um numero inteiro em metros: '))

//Processamento
const km = parseInt(metros / 1000)
const metro = metros % 1000

//Saida
console.log('O valor em km é: ', km, 'e', metro, 'metros')