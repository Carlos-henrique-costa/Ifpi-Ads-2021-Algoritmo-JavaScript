const prompt = require('prompt-sync')()

function main(){
    const angulo1 = Number(prompt('Digite o primeiro ângulo: '))
    const angulo2 = Number(prompt('Digite o segundo ângulo: '))
    const angulo3 = Number(prompt('Digite o terceiro ângulo: '))

    const soma = angulo1 + angulo2 + angulo3

    if(soma === 180){
        if(angulo1 < 90 && angulo2 < 90 && angulo3 < 90){
            console.log('É um triângulo acutângulo')
        }else if(angulo1 === 90 || angulo2 === 90 || angulo3 === 90){
            console.log('É um triângulo retângulo')
        }else{
            console.log('É um triângulo obtusângulo')
        }
    }else{
        console.log('Não é um triângulo')
    }

}

main()