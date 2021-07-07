const prompt = require('prompt-sync')()

function main(){
    const frase = prompt('Escreva uma frase: ')
    let palavra = ''
    
    for(let i = 0; i < frase.length; i++){
        const texto = frase[i]

        if(texto.charCodeAt(0) === 32){
            console.log(palavra)
            palavra = ''
        }else{
            palavra += texto
        }
    }
    console.log(palavra)
}

main()