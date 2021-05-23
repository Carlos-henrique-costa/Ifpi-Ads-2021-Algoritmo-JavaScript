const prompt = require('prompt-sync')();

//Entrada
const temperaturaC = Number(prompt('Digite a temperatura em °C: '))

//processamento
const temperaturaF = (9 * temperaturaC + 160)/5

//Saida
console.log('A temperatura em farenheight °F é: ', temperaturaF)