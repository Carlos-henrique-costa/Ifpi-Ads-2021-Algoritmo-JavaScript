const prompt = require('prompt-sync')();

//Entrada
const valor_dolar = Number(prompt('Informe o valor do dolar: '))
const dolar = Number(prompt('Informe o valor em dolar: '))

//Processamento
const real = (dolar * valor_dolar).toFixed(2)

//Saida
console.log('O valor em real(R$) é: ', real)