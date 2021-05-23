const prompt = require('prompt-sync')();

//Entrada
const minutos = Number(prompt('Digite um numero inteiro em minutos: '))

//Processamento
const dias = parseInt(minutos / 1440)
const horas = parseInt((minutos / 60) % 24)
const minuto = parseInt((minutos % 60) % 60)

//Saida
console.log('O total em dias é: ', dias, 'e',horas,'horas e', minuto, 'minutos')