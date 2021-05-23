const prompt = require('prompt-sync')();
//Entrada
const a = prompt('Digite o primeiro numero: ')
const b = prompt('Digite o segundo numero: ')

//Processamento
const ab = a + b
const ba = b + a

//Saida
console.log('A ordem inversa dos numeros', ab,'é: ', ba)