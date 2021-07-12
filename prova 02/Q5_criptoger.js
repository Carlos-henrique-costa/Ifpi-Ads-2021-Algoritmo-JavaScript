const prompt = require('prompt-sync')()

function main() {
    const frase = String(prompt('Digite um texto: '))

    const criptoger = consoante_avancar(frase)

    console.log(truncar_frase(frase))
    //console.log(palavra_invertida(frase))
    //console.log(vogais_para_numeros(frase))
    //console.log(numeros_para_caracteres(frase))
    console.log(`Criptografia de Roger: ${criptoger}`)
    
}

function truncar_frase(letra_a){
    let frase_truncada = ['' , '']

    for(let i = 0; i < Math.floor(letra_a.length/2); i++){
        frase_truncada[0] = frase_truncada[0] + letra_a[i]
    }

    for(let i = Math.floor(letra_a.length/2); i < letra_a.length; i++){
        frase_truncada[1] = frase_truncada [1] + letra_a[i]
    }

    return frase_truncada
}

function palavra_invertida(letra_b){
    let primeira_fatia = ''
    let segunda_fatia = ''

    for(let i = truncar_frase(letra_b)[0].length - 1; i >= 0; i--){
        primeira_fatia = primeira_fatia + truncar_frase(letra_b)[0][i]
    }

    for(let i = truncar_frase(letra_b)[1].length - 1; i >= 0; i--){
        segunda_fatia = segunda_fatia + truncar_frase(letra_b)[1][i]
    }

    return primeira_fatia + segunda_fatia
}

function vogais_para_numeros(letra_c){
    const frase = palavra_invertida(letra_c)
    let vogais_numeros = ''

    for(let i = 0; i < frase.length; i++){
        if(frase[i] === 'a' || frase[i] === 'A'){
            vogais_numeros = vogais_numeros + 1
        }else if(frase[i] === 'e' || frase[i] === 'E'){
            vogais_numeros = vogais_numeros + 2
        }else if(frase[i] === 'i' || frase[i] === 'I'){
            vogais_numeros = vogais_numeros + 3
        }else if(frase[i] === 'o' || frase[i] === 'O'){
            vogais_numeros = vogais_numeros + 4
        }else if(frase[i] === 'u' || frase[i] === 'U'){
            vogais_numeros = vogais_numeros + 5
        }else{
            vogais_numeros = vogais_numeros + frase[i]
        }
    }

    return vogais_numeros
}

function numeros_para_caracteres(letra_d){
    const frase = vogais_para_numeros(letra_d)
    let numeros_caractere = ''

    for(let i = 0; i < frase.length; i++){
        if(frase[i] === '1'){
            numeros_caractere = numeros_caractere + '*'
        }else if(frase[i] === '2'){
            numeros_caractere = numeros_caractere + '**'
        }else if(frase[i] === '3'){
            numeros_caractere = numeros_caractere + '***'
        }else if(frase[i] === '4'){
            numeros_caractere = numeros_caractere + '****'
        }else if(frase[i] === '5'){
            numeros_caractere = numeros_caractere + '*****'
        }else if(frase[i] === '6'){
            numeros_caractere = numeros_caractere + '******'
        }else if(frase[i] === '7'){
            numeros_caractere = numeros_caractere + '*******'
        }else if(frase[i] === '8'){
            numeros_caractere = numeros_caractere + '********'
        }else if(frase[i] === '9'){
            numeros_caractere = numeros_caractere + '*********'
        }else if(frase[i] === '0'){
            numeros_caractere = numeros_caractere + '#'
        }else{
            numeros_caractere = numeros_caractere + frase[i]
        }
    }

    return numeros_caractere
}

function consoante_avancar(letra_e){
    const frase = numeros_para_caracteres(letra_e)
    let codigo = 0
    let frase_criptografada = ''

    for(let i = 0; i < frase.length; i++){
        if(frase.charCodeAt(i) >= 65 && frase.charCodeAt(i) <= 90){
            codigo = frase.charCodeAt(i) + 10
            if(codigo > 90){
                codigo = codigo - 26
            }
            frase_criptografada = frase_criptografada + String.fromCharCode(codigo)
        }else if(frase.charCodeAt(i) >= 97 && frase.charCodeAt(i) <= 122){
            codigo = frase.charCodeAt(i) + 10
            if(codigo > 122){
                codigo = codigo - 26
            }
            frase_criptografada = frase_criptografada + String.fromCharCode(codigo)
        }else{
            frase_criptografada = frase_criptografada + frase[i]
        }
    }

    return frase_criptografada
}

main()