const prompt = require('prompt-sync')()

function main(){
    const texto = prompt('Texto: ')
    const inicio = Number(prompt('Começar em qual posição: '))
    const final = Number(prompt('Extrair quantos caracteres: '))

    const texto_final = substr(texto, inicio, final)

    console.log(texto_final)
}

function substr(texto, inicio, final){
    let texto_extraido = ''
    let contador = 0
    for (let i = inicio; contador < final; i++){
        if (i < texto.length){
            texto_extraido += texto[i]
        }
        contador++
    }
    return texto_extraido
}

main()