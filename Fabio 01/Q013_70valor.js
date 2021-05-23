const prompt = require('prompt-sync')();

//Entrada
const valor = prompt('Digite um valor em (R$): ')

//processamento
const valor70 = valor - (valor * 0.30)

//saida
console.log('70% desse valor é: ', valor70)