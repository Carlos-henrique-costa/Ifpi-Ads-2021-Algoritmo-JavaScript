const prompt = require('prompt-sync')()

function main(){
    const x1 = Number(prompt('Digite o primeiro ponto de X1: '))
    const y1 = Number(prompt('Digite o primeiro ponto de Y1: '))
    const x2 = Number(prompt('Digite o segundo ponto de X2: '))
    const y2 = Number(prompt('Digite o segundo ponto de Y2: '))

    if(x1 > 0 && x2 > 0){
        if(y1 > 0 && y2 >0){
            if( x1 > x2 && y1 > y2){
                const base = x1 - x2
                const altura = y1 - y2
                const area_retangulo = base * altura
                console.log('A area do retangulo é: ', area_retangulo)
            }else if(x1 < x2 && y1 > y2){
                const base = x2 - x1
                const altura = y1 - y2
                const area_retangulo = base * altura
                console.log('A area do retangulo é: ', area_retangulo)
            }else if(x1 > x2 && y1 < y2){
                const base = x1 - x2
                const altura = y2 - y1
                const area_retangulo = base * altura
                console.log('A area do retangulo é: ', area_retangulo)
            }else if(x1 < x2 && y1 < y2){
                const base = x2 - x1
                const altura = y2 - y1
                const area_retangulo = base * altura
                console.log('A area do retangulo é: ', area_retangulo)
            }else{
                const base = x1
                const altura = y1
                const area_retangulo = base * altura
                console.log('A area do retangulo é: ', area_retangulo)
            }
        }else{
            console.log('Valor de Y1 ou Y2 invalido')
        }
    }else{
        console.log('Valor de X1 ou X2 invalido')
    }
}

main()