const prompt = require('prompt-sync')();

//Entrada
const temperaturaF = Number(prompt('Digite a temperatura em farenheight °F: '))

//processamento
const temperaturaC = (5 * temperaturaF - 160)/9

//Saida
console.log('A temperatura em Celsius °C é: ', temperaturaC.toFixed(2))