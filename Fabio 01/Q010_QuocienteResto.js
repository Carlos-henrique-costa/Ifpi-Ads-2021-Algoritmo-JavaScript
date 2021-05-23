const prompt= require('prompt-sync')();

//Entrada
const numero1 = Number(prompt('Digite o primeiro numero: '))
const numero2 = Number(prompt('Digite o segundo numero: '))

//Processamento
const quociente = (numero1 / numero2).toFixed(2)
const resto = numero1 % numero2

//Saida
console.log(quociente, ' e', resto)