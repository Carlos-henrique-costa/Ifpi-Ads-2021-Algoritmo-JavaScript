const prompt = require('prompt-sync')();

//Entrada
const saque = Number(prompt('Digite o valor a ser sacado em (R$): '))

//Processamento
const nota100 = parseInt(saque / 100)
const nota50 = parseInt((saque  % 100) / 50)
const nota20 = parseInt((saque  % 50) / 20)
const nota10 = parseInt(((saque  % 50) % 20) / 10)
const nota5 = parseInt((saque  % 10) / 5)
const nota2 = parseInt((saque  % 5) / 2)
const nota1 = parseInt((saque % 5) % 2)

//Saida
console.log('A distribuição do valor: ', saque, 'é: ')
console.log('Notas de 100(R$)', nota100)
console.log('notas de 50(R$)', nota50)
console.log('notas de 20(R$)', nota20)
console.log('notas de 10(R$)', nota10)
console.log('notas de 5(R$)', nota5)
console.log('notas de 2(R$)', nota2)
console.log('notas de 1(R$)', nota1)