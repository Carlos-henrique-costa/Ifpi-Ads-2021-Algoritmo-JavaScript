const prompt = require('prompt-sync')();

//Entrada
console.log('##### Digite sua idade em anos, meses e dias #####')
const anos = Number(prompt('Digite quando anos: '))
const meses = Number(prompt('Digite quando meses: '))
const dias = Number(prompt('Digite quando dias: '))

//Processamento
const idade_anos = anos * 360
const idade_meses = meses * 30
const idade_dias = parseInt(idade_anos + idade_meses + dias)

//Saida
console.log('Sua idade em dias é: ', idade_dias)