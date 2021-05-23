const prompt = require('prompt-sync')();

//Entrada
const numero = prompt('Digite um numero de 3 digitos: ')

//Processamento
const inverso = numero.split('').reverse().join('')
const soma = parseInt(numero) + parseInt(inverso)

//Saida
console.log('A diferença entro o numero e seu inverso é: ', soma)
