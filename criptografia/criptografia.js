const prompt = require('prompt-sync')()

function main() {
    const palavra = prompt('digite uma palavra: ')

    const saida1 = primeira_criptografia(palavra)
    console.log(saida1)

    const saida2 = segunda_criptografia(palavra)
    console.log(saida2)

    const saida3 = terceira_criptografia(palavra)
    console.log(saida3)

}

function primeira_criptografia(palavra_criptografada_1){
    let palavra_nova = ''
    
    for (let i = 0; i < palavra_criptografada_1.length; i++){
        let codigo_ascii_1 = palavra_criptografada_1.charCodeAt(i)
        if (codigo_ascii_1 >= 65 && codigo_ascii_1 <= 90 || codigo_ascii_1 >= 97 && codigo_ascii_1 <= 122){
            palavra_nova = palavra_nova + String.fromCharCode((codigo_ascii_1 + 3))
        } else {
            palavra_nova = palavra_nova + palavra_criptografada_1[i]
        }
    }
    
    return palavra_nova
}

function segunda_criptografia(palavra_criptografada_2){
    let palavra_nova_invertida = ''
    
    for (let i = palavra_criptografada_2.length - 1; i >= 0 ; i--){
        let codigo_ascii_2 = palavra_criptografada_2.charCodeAt(i)
        if (codigo_ascii_2 >= 65 && codigo_ascii_2 <= 90 || codigo_ascii_2 >= 97 && codigo_ascii_2 <= 122){
            palavra_nova_invertida = palavra_nova_invertida + String.fromCharCode(codigo_ascii_2 + 3)
        } else {
            palavra_nova_invertida = palavra_nova_invertida + palavra_criptografada_2[i]
        }
    }
    
    return palavra_nova_invertida
}

function terceira_criptografia(palavra_criptografada_3){
    let palavra_criptografada = segunda_criptografia(palavra_criptografada_3)
    let nova_palavra_criptografada = ''

    for (let i = 0; i < palavra_criptografada_3.length; i++){
        codigo_ascii_3 = palavra_criptografada.charCodeAt(i)
        
        if (i < (palavra_criptografada.length/2)) {
            nova_palavra_criptografada = nova_palavra_criptografada + palavra_criptografada[i]
        } else {
            nova_palavra_criptografada = nova_palavra_criptografada + String.fromCharCode((codigo_ascii_3 - 1))
        }
    }   
    return nova_palavra_criptografada

}

main()