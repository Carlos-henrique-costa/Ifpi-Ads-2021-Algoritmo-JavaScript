const prompt = require('prompt-sync')()

function main(){
    const frase = prompt('Digite uma frase: ')

    const frase_criptografada = criptografar(frase)

    console.log(`Frase criptografada: ${frase_criptografada}`)
    console.log(`Frase descriptografada: ${frase}`)

}

function criptografar(frase) {
    let frase_criptografada = ''

    for(let i = 0; i < frase.length; i++){
        const caractere = frase[i]
        const codigo = caractere.charCodeAt(0)

        if(codigo === 65 || codigo === 97 || codigo === 69 || codigo === 101 || codigo === 73 || codigo === 105 || codigo === 79 || codigo === 111 || codigo === 85 || codigo === 117){
            continue
        }else{
            frase_criptografada = frase_criptografada + caractere
        }
    }
    return frase_criptografada
}

main()