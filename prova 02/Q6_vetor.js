const{media_dos_valores, 
    maior_valor, 
    menor_valor, 
    quantidade_positiva, 
    quantidade_negativa, 
    valor_repetido} = require('./modules')

const prompt = require('prompt-sync')()

function main(){
    const tamanho = Number(prompt('Informe o tamanho do vetor: '))
    const vetor = Array(tamanho)

    for(let i = 0; i < vetor.length; i++){
        vetor[i] = Number(prompt(`digite o valor numerico da posição ${i}: `))
    }

    console.log(`A) Media dos Valores: ${media_dos_valores(vetor)}`)
    console.log(`B) Maior valoe: ${maior_valor(vetor)}`)
    console.log(`C) Menos valor: ${menor_valor(vetor)}`)
    console.log(`D) Quantidade positivos: ${quantidade_positiva(vetor)}`)
    console.log(`E) Quantidade negativos: ${quantidade_negativa(vetor)}`)
    console.log(`F) Valores repetidos: ${valor_repetido(vetor)}`)
}

main()