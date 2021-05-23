const prompt = require('prompt-sync')();

//Entrada
const horas = Number(prompt('Informe a hora: '))
const minuto = Number(prompt('Informe o minuto: '))

//Processamento
const total_minutos = (horas * 60) + minuto

//Saida
console.log('O total em minutos é: ', total_minutos)