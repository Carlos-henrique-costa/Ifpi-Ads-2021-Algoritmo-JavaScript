const prompt = require('prompt-sync')();

//Entrada
const raio = prompt('Informe o raio de uma circunferência: ')

//processamento
const comprimento = 2 * 3.14 * raio

//Saida
console.log('O comprimento é: ', comprimento)