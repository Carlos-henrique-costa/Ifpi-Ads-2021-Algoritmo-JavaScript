const input = require('prompt-sync')()

function main(){
    const nome = input('Texto: ')
    const nome_vertical = vertical(nome)

    console.log(`Texto na vertical: \n${nome_vertical}`)
}

function vertical(nome){
    let retorno = ''
    for (let i = 0; i < nome.length; i++){
        retorno += nome[i] + '\n'
    }
    return retorno
}

main()