const prompt = require('prompt-sync')()

function main(){
    const lado1 = Number(prompt('Digite o primeiro ângulo: '))
    const lado2 = Number(prompt('Digite o segundo ângulo: '))
    const lado3 = Number(prompt('Digite o terceiro ângulo: '))

    if(lado1 + lado2 > lado3 && lado1 +lado3 > lado2 && lado2 + lado3 > lado1){
        if(lado1 === lado2  && lado2 === lado3){
            console.log('É um triângulo equilátero')
        }else if(lado1 === lado2 || lado2 === lado3){
            console.log('É um triângulo isósceles')
        }else {
            console.log('É um triângulo escaleno')
        }

    }else{
        console.log('Não é um triângulo')
    }

}

main()