const prompt = require('prompt-sync')();

//Entrada
const horas = Number(prompt('Digite um numero inteiro em horas: '))

//Processamento
const semanas = parseInt(horas / 168)
const dias = parseInt((horas / 24) % 24)
const hora = parseInt((horas % 168) % 24)

//Saida
console.log('O total em semanas é: ', semanas, 'e', dias,'dias e', hora, 'horas')