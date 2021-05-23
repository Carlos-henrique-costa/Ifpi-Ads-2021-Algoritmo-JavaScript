const prompt = require('prompt-sync')();

//Entrada
const numero = Number(prompt('Digite um numero inteiro de 3 digitos: '))

//Processamento
p_digito = parseInt(numero / 100)
s_digito = parseInt((numero % 100) / 10)
t_digito = numero % 10

soma = p_digito + s_digito + t_digito

//Saida
console.log('A soma dos 3 digitos é: ',soma)

/*teste pra cada digito
console.log(p_digito)
console.log(s_digito)
console.log(t_digito)*/