const prompt = require('prompt-sync')()

function main(){
    const frase = prompt('Escreva uma frase: ')
    let nova_frase = ''
    
    for(let i = 0; i < frase.length; i++){
        const caractere = frase[i]
        nova_frase += caractere + caractere
    }
    console.log(nova_frase)
}

main()