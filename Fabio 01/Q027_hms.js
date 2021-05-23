const prompt = require('prompt-sync')();

//Entrada
const segundos = Number(prompt('Digite um numero inteiro em segundos: '))

//Processamento
const horas = parseInt(segundos / 3600)
const minutos = parseInt((segundos / 60) % 60)
const segundo = parseInt((segundos % 3600) % 60)

//Saida
console.log('O total em hrs é: ', horas, 'e', minutos,'minutos e', segundo)