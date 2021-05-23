const prompt = require('prompt-sync')();

//Entrada
const velocidadeKmh = Number(prompt('Qual a velocidade em Km/h? '))

//Processamento
const velocidadeMps = (velocidadeKmh / 3.6).toFixed(2)

//Saida
console.log('Sua velocidade em M/s é: ', velocidadeMps)