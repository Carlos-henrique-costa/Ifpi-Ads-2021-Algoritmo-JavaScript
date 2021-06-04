const prompt = require('prompt-sync')()

function main(){
    const numero1 = prompt('Digite o primeiro numero: ')
    const numero2 = prompt('Digite o segundo numero: ')
    const numero3 = prompt('Digite o terceiro numero: ')
    const numero4 = prompt('Digite o quarto numero: ')
    const numero5 = prompt('Digite o quinto numero: ')

    let maior = numero1
    let menor = numero1

    if(numero2 > maior){
        maior = numero2
    }else {
        menor = numero2
    }
    if (numero3 > maior){
        maior = numero3
    }else {
        menor = numero3
    }
    if (numero4 > maior){
        maior = numero4
    }else {
        menor = numero4
    }
    if (numero5 > maior){
        maior = numero5
    }else {
        menor = numero5
    }

    console.log('O maior numero é: ', maior, 'e o menor: ', menor)
}

main()