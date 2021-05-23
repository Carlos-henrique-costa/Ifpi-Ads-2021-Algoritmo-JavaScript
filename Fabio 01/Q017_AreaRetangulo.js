const prompt = require('prompt-sync')();

//Entrada
const base = Number(prompt('Informe a base do Retangulo: '))
const Altura = Number(prompt('Informe a altura do Retangulo: '))

//Processamento
const area = base * Altura

//Saida
console.log('A area do Reatangulo é: ', area)