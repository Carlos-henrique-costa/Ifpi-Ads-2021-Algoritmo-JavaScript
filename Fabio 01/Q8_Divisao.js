const prompt = require('prompt-sync')();

//Entrada
const numero1 = Number(prompt('Digite o primeiro numero: '))
const numero2 = Number(prompt('Digite segundo numero: '))

//Processamento
const soma = numero1 + numero2
const subtracao = numero1 - numero2
const divisao = (soma / subtracao).toFixed(2)

//Saida
console.log('A divisão da soma pela subtração é: ', divisao)

/*
console.log(soma)
console.log(subtracao)*/