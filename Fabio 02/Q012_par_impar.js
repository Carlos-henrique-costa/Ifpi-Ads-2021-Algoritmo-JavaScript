const prompt = require('prompt-sync')()

function main(){
    const numero = prompt('Digite um numero inteiro: ')

    if (numero % 2 === 0){
        console.log('par')
    }else {
        console.log('Impar')
    }
}

main()