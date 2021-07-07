const prompt = require('prompt-sync')()

function main(){
    const frase = prompt('Escreva uma frase: ')
    let nova_frase = ''
    
    for(let i = 0; i < frase.length; i++){
        const texto = frase[i]

        if(texto.charCodeAt(0) !== 32){
            nova_frase += texto
        }
    }
    console.log(nova_frase)
}

main()