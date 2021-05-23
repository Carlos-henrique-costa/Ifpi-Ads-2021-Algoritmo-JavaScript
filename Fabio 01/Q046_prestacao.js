const prompt = require('prompt-sync')();

//Entrada
const valor = Number(prompt('Digite o valor da mercadoria: '))

//Processamento
const entrada = parseInt((valor / 3) + (valor % 3))
const prestacao = parseInt(valor - entrada) / 2

console.log('O valor da entrada é: ', entrada, '(R$) e as 2 prestação são: ', prestacao, '(R$) cada')