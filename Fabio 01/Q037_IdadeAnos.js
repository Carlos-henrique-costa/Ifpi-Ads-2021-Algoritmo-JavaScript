const prompt = require('prompt-sync')();

//Entrada
const dias = Number(prompt('Digite quando dias: '))

//Processamento
const idade_anos = parseInt(dias / 360)
const idade_meses = parseInt((dias % 360) / 30)
const idade_dias = parseInt(dias % 360) % 30

//Saida
console.log('Sua idade em em anos é: ', idade_anos, 'e ', idade_meses, 'meses e', idade_dias, 'dias')