const prompt = require('prompt-sync')()

function main(){
    const numero = Number(prompt('Digite um numero de dois digitos: '))

    const dezena = parseInt(numero / 10)
    const unidade = numero % 10

    if (dezena === unidade){
        console.log('A dezena é igual a unidade!')
    }else {
        console.log('A dezena é diferente da unidade!')
    }
}

main()