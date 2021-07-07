const prompt = require('prompt-sync')()

function main(){
    const frase = prompt('Digite um texto: ')
    let palavra = 1

    for (let i = 0; i < frase.length; i++){
        let espaco = frase[i]
        
        if(espaco.charCodeAt(0) === 32){
            palavra++
       }
    }
    console.log(`O Texto tem : ${palavra} palavras`)
}
main()