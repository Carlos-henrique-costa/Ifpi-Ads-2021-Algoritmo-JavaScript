const prompt = require('prompt-sync')();

//Entrada
const numero = Number(prompt('Digite um numero inteiro de 4 digitos: '))

//Processamento

p_digito = parseInt(numero / 1000)
s_digito = parseInt((numero % 1000) / 100)
t_digito = parseInt((numero % 100) / 10)
q_digito = numero % 10

soma = p_digito + s_digito + t_digito + q_digito

//Saida
console.log('A soma dos 4 digitos é: ',soma)