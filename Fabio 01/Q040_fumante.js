const prompt = require('prompt-sync')();

//Entrada
const anos = Number(prompt('Quantos anos fuma: '))
const fuma_dia = Number(prompt('Quantos cigaros por dia: '))
const preco_carteira = Number(prompt('Informe o preço da carteira: '))

//Processamento
const anos_dias = fuma_dia * (anos * 360)
const total_carteira = anos_dias / 20
const gasto_total = parseInt(total_carteira * preco_carteira)

//Saida
console.log('O total gasto é: ', gasto_total, 'Reais(R$)')