const prompt = require('prompt-sync')()

function main(){
    const valor1 = Number(prompt('Digite o primeiro valor: '))
    const valor2 = Number(prompt('Digite o segundo valor: '))
    const opcao = Number(prompt('Digite o 1 para somar[+], 2 para subtrair[-], 3 para multiplicar[*], ou 4 para dividir[/]: '))
    const soma = valor1 + valor2
    const subtrair = valor1 - valor2
    const multiplicar = valor1 * valor2
    const divisao = (valor1 / valor2).toFixed(2)

    if( opcao ===1 ){
        console.log('Soma: ', soma)
    }else if( opcao === 2 ){
        console.log('Subtração: ', subtrair)
    }else if( opcao === 3){
        console.log('Multiplicação: ', multiplicar)
    }else if( opcao === 4){
        console.log('Divisão: ', divisao)
    }else{
        console.log('Opção invalida!')
    }

}

main()