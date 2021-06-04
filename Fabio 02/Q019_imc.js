const prompt = require('prompt-sync')()

function main(){
    const peso = Number(prompt('Digite o peso: '))
    const altura = Number(prompt('Digite a altura: '))

    const imc = (peso / (Math.pow(altura, 2))).toFixed(3)

    if (imc < 25){
        console.log('Peso normal', imc)
    }else if(imc >= 25 && imc <= 30){
        console.log('Obeso', imc)
    }else {
        console.log('Obesidade mórbida', imc)
    }

}

main()