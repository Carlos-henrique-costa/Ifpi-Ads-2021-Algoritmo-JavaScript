const prompt = require('prompt-sync')();

//Entrada
const minuto = Number(prompt('Informe o minuto: '))

//Processamento
const horas = (minuto / 60).toFixed(2)

//Saida
console.log('O equivalente em horas é: ', horas)