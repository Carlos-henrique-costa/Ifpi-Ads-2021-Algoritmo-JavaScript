const prompt = require('prompt-sync')();

//Entrada
const nota1 = Number(prompt('Digite a primeira nota: '))
const peso1 = Number(prompt('Digite o peso 1: '))
const nota2 = Number(prompt('Digite a segunda nota: '))
const peso2 = Number(prompt('Digite o peso 2: '))
const nota3 = Number(prompt('Digite a terceira nota: '))
const peso3 = Number(prompt('Digite o peso 3: '))

const soma_nota = (nota1 * peso1)+(nota2*peso2)+(nota3*peso3)
const soma_peso = (peso1 + peso2 + peso3)

//Processamento
const media_ponderada = (soma_nota)/(soma_peso)

//Saida
console.log('Sua media ponderada é: ', media_ponderada.toFixed(2))