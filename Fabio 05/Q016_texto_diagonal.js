const prompt = require('prompt-sync')()

function main(){
    let texto = prompt('Digite um texto de até 20 caracteres: ')

    while(texto.length > 20){
        console.log('O texto ultrapassou o limite')
        texto = prompt('Digite um texto de até 20 caracteres: ')
    }

    console.log(`Texto na diagonal:\n${diagonal(texto)}`)
}

function diagonal(texto){
    let retorno = ''
    for (let i = 0; i < texto.length; i++){
        for (let j = 0; j < i; j++){
            retorno += ' '
        }
        retorno += texto[i] + '\n'
    }
    return retorno
}

main()