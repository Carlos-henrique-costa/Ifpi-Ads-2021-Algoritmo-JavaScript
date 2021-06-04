const prompt = require('prompt-sync')()

function main(){
    //Entrada
    const numero1 = Number(prompt('Digite o primeiro numero: '))
    const numero2 = Number(prompt('Digite o segundo numero: '))
    const numero3 = Number(prompt('Digite o terceiro numero: '))

    //Processamento

    if (numero1 > numero2 && numero1 > numero3){
        console.log('O primeiro numero é o maior')
    }else if (numero2 > numero1 && numero2 > numero3){
        console.log('O segundo numero é o maior')
    }else if (numero3 > numero1 && numero3 > numero2){
        console.log('O terceiro numero é o maior')
    }else {
        console.log('Dois ou três numeros iguais')
    }

}

main()