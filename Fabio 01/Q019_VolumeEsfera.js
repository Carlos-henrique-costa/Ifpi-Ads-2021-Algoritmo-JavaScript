const prompt = require('prompt-sync')();

//Entrada
const raio = Number(prompt('Informe o valor do raio de uma esfera: '))


//Processamento
const raiox3 = Math.pow(raio, 3)
const volume = (4 * 3.14 * raiox3)/3

//saida
console.log('O volume da esfera é: ',volume)