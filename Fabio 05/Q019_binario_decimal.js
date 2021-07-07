const prompt = require('prompt-sync')()

function main(){
    const Binario = Number(prompt('Digite um numero em binaria: '))

    console.log('O numero binario transformado em decimal: ', parseInt(Binario, 2))
}

main()