const prompt = require('prompt-sync')();

//Entrada
const numero = Number(prompt('Digite um numero inteiro de 3 digitos: '))

//Processamento
p_digito = parseInt(numero / 100)
s_digito = parseInt((numero % 100) / 10)
t_digito = numero % 10

//Saida
console.log('O inverso dos 3 digitos é: ', t_digito, s_digito, p_digito)