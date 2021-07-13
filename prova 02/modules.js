function media_dos_valores(letra_a){
    let media = 0

    for(let i = 0; i < letra_a.length; i++){
        media = media + letra_a[i]
    }

    media = media/letra_a.length
    return media
}

function maior_valor(letra_b){
    let maior = letra_b[0]

    for(let i = 0; i < letra_b.length; i++){
        if(letra_b[i] > maior){
            maior = letra_b[i]
        }
    }
    return maior
}

function menor_valor(letra_c) {
    let menor = letra_c[0]

    for(let i = 0; i < letra_c.length; i++){
        if(letra_c[i] < menor){
            menor = letra_c[i]
        }
    }
    return menor
}

function quantidade_positiva(letra_d){
    let positivos = 0

    for(let i = 0; i < letra_d.length; i++){
        if(letra_d[i] > 0){
            positivos++
        }
    }

    return positivos
}

function quantidade_negativa(letra_e){
    let negativos = 0

    for(let i = 0; i < letra_e.length; i++){
        if(letra_e[i] < 0){
            negativos++
        }
    }

    return negativos
}

function valor_repetido(letra_f){
    let elemento = 0
    let contador = 0
    for(let i = 0; i < letra_f.length; i++){
        elemento = letra_f[i]
        contador = 0
        for( let j = 0; j < letra_f.length; j++){
            if(elemento === letra_f[j]){
                contador++
            }
        }
        if( contador > 1){
            return 'Há valores repetidos'
        }
    }
    return 'Não há valores repetidos'
}

module.exports = {
    media_dos_valores,
    maior_valor,
    menor_valor,
    quantidade_positiva,
    quantidade_negativa,
    valor_repetido
}