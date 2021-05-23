//Vkm/h = vm/s * 3.6

const prompt = require('prompt-sync')();

//Entrada
const velocidadeMps = Number(prompt('Qual a velocidade em metros por minuto? '))

//processamento
const velocidadeKmh = velocidadeMps * 3.6

//Saída
console.log('Sua velocidade em km/h é: ', velocidadeKmh)