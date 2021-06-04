const prompt = require('prompt-sync')()

function main(){
    const numero = Number(prompt('Digite um numero de 4 digitos: '))
    
    const primeira_dezena = parseInt(numero / 100)
    const segunda_dezena = parseInt(numero % 100)
    const soma = primeira_dezena + segunda_dezena
    const quadrado = Math.pow(soma , 2)

    if (numero >= 1000 && numero <= 9999){
        if(quadrado === numero){
            console.log('Quadrado original')
        }else{
            console.log('o quadrado não é original')
        }
    }else{
        console.log('Quantidade de digitos insuficientes')
    }
}

main()