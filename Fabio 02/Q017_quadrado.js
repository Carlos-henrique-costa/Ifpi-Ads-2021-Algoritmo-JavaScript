const prompt = require('prompt-sync')()

function main(){
    const valor1 = Number(prompt('Digite o primeiro valor inteiro: '))
    const valor2 = Number(prompt('Digite o segundo valor inteiro: '))

    const resto = valor1 % valor2
    const soma = valor1 + valor2
    const soma_resto = valor1 + valor2 + resto
    const multiplicacao = soma_resto * valor1
    const divisao = soma / valor2
    const quadrado1 = valor1 * valor1
    const quadrado2 = valor2 * valor2

    if( resto === 1){
        console.log('Soma do primeiro valor pelo segundo + o resto: ', soma_resto)
    }else if(resto === 2){
        if (valor1 % 2 === 0 && valor2 % 2 === 0){
            console.log('Valores pares')
        }else {
            console.log('Valores impares')
        }
    }else if(resto === 3){
        console.log('Multiplcação da soma do resto pelo primeiro valor: ', multiplicacao)
    }else if(resto === 4){
        console.log('Divisão da soma pelo segundo valor', divisao)
    }else{
        console.log('Quadrado do primeiro', quadrado1, 'e do segundo: ', quadrado2)
    }
}

main()