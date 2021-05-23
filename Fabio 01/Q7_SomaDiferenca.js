const prompt = require('prompt-sync')();

//Entrada
const numero1 = Number(prompt('Digite o primeiro numero: '))
const numero2 = Number(prompt('Digite segundo numero: '))
const numero3 = Number(prompt('Digite terceiro numero: '))

//Processamento
const soma = numero1 + numero2
const diferenca = numero2 - numero3

//Saida
console.log('A soma dos dois primeiros é: ', soma, 'e a diferenca entre os dois ultimos é: ', diferenca)