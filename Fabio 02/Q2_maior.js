const prompt = require('prompt-sync')()

function main(){
    const numero1 = Number(prompt('Digite o primeiro numero: '))
    const numero2 = Number(prompt('Digite o segundo numero: '))

    if (numero1 > numero2){
        console.log('O primeiro numero é maior!')
    }else if (numero2 > numero1){
        console.log('O segundo numero é maior')
    }else {
        console.log('Numeros iguais')
    }
}

main()