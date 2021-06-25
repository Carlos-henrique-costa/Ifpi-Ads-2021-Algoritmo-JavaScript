const prompt = require('prompt-sync')();

function main() {
    const palavra = prompt('digite uma palavra: ');

    const saida1 = primeira_criptografia(palavra)
    console.log(saida1)

    const saida2 = segunda_criptografia(palavra)
    console.log(saida2)

}

function primeira_criptografia(palavra_criptografada_1){
    let palavra_nova = ''
    
    for (let i = 0; i < palavra_criptografada_1.length; i++){
        codigo_ascii = palavra_criptografada_1.charCodeAt(i)
        if (codigo_ascii >= 65 && codigo_ascii <= 90 || codigo_ascii >= 97 && codigo_ascii <= 122){
            palavra_nova = palavra_nova + String.fromCharCode((codigo_ascii + 3))
        } else {
            palavra_nova = palavra_nova + palavra_criptografada_1[i]
        }
    }
    
    return palavra_nova
}

function segunda_criptografia(palavra_criptografada_2){
    let palavra_nova_invertida = ''
    
    for (let i = palavra_criptografada_2.length - 1; i >= 0 ; i--){
        codigo_ascii = palavra_criptografada_2.charCodeAt(i)
        if (codigo_ascii >= 65 && codigo_ascii <= 90 || codigo_ascii >= 97 && codigo_ascii <= 122){
            palavra_nova_invertida = palavra_nova_invertida + String.fromCharCode(codigo_ascii + 3)
        } else {
            palavra_nova_invertida = palavra_nova_invertida + palavra_criptografada_2[i]
        }
    }
    
    return palavra_nova_invertida
}

main()