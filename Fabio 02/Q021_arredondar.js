const prompt = require('prompt-sync')()

function main(){
    const numero = Number(prompt('Digite um numero: '))

    const arredondar = Math.round(numero)

    console.log('Numero arrendado', arredondar)

}

main()