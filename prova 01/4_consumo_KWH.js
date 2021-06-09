const prompt = require('prompt-sync')()

function main(){
    const consumo = Number(prompt('Digite um valor de consumo: '))
    
    let valorParcialConta = 0
    let valorTaxaIluminacaoPublica = 0

    if (consumo <= 30){
        valorParcialConta = baixoConsumo(consumo)
    }else if (consumo <= 100){
        valorParcialConta = medioConsumo(consumo)
    }else {
        valorParcialConta = altoConsumo(consumo)
    }

    if (consumo >= 80){
        valorTaxaIluminacaoPublica = taxaIluminacaoPublica(consumo)
    }

    let totalBandeira = aplicarBandeira(consumo)
    let totalICMS = valorICMS(valorParcialConta)
    let totalPISCONFIS = valorPISeCONFIS(valorParcialConta)
    let valorTotalDaConta = valorParcialConta + totalICMS + totalPISCONFIS + totalBandeira + valorTaxaIluminacaoPublica
    
    console.log(`Consumo: ${consumo}KWh\n`)
    console.log(`Valor Faturado: R$ ${valorParcialConta.toFixed(2)}`)
    console.log(`Bandeira: R$ ${totalBandeira.toFixed(2)}`)
    console.log(`ICMS: R$ ${totalICMS.toFixed(2)}`)
    console.log(`PIS/CONFIS: R$ ${totalPISCONFIS.toFixed(2)}`)
    console.log(`Taxa de Iluminação: R$ ${valorTaxaIluminacaoPublica.toFixed(2)}`)
    console.log(`Valor total da conta: R$ ${valorTotalDaConta.toFixed(2)}`)
}

function baixoConsumo(consumo){
    return consumo * 0
}
    
function medioConsumo(consumo){
    return consumo * 0.59
}
    
function altoConsumo(consumo){
    return consumo * 0.75
}

function taxaIluminacaoPublica(valor){
    return valor * 0.06
}
    
function valorICMS(valor){
    return valor * 0.25
}
    
function valorPISeCONFIS(valor){
    return valor * 0.15
}
    
function aplicarBandeira(consumo){
    let x = consumo / 100
    return Math.floor(x) * 8
}

main()