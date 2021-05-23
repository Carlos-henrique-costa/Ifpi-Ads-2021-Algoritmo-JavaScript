const prompt = require('prompt-sync')();

//Entrada
const latao = Number(prompt('Digite a quantidade de latão em Kg: '))

//Processamento
const cobre = (latao * 0.70).toFixed(2)
const zinco = (latao * 0.30).toFixed(2)

//Saida
console.log(latao, ' Kg de latão tem', cobre, 'kg de cobre e ', zinco, 'kg de zinco')