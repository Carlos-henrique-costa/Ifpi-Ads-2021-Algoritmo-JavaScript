const prompt = require('prompt-sync')();

//Entrada
const salario = Number(prompt('Informe o seu salario: '))

//Processamento
const aumento = salario + (salario * 0.25)

//Saida
console.log('Seu novo salario é: ', aumento, 'R$')