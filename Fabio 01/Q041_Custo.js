const prompt = require('prompt-sync')();

//Entrada
const custo_fabrica = Number(prompt('Digite o custo da fabrica: '))

//Processamento
const distribuidor = custo_fabrica * 0.28
const imposto = custo_fabrica * 0.45
const custo_final = (custo_fabrica + distribuidor + imposto)

//Saida
console.log('O custo ao consumidor é: ', custo_final)