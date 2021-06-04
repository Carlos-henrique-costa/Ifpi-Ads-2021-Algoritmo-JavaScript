const prompt = require('prompt-sync')()

function main(){
    const numero = Number(prompt('Digite um numero de 4 digitos: '))
    
    const primeira_dezena = parseInt(numero / 100)
    const segunda_dezena = parseInt(numero % 100)
    const soma = primeira_dezena + segunda_dezena
    const raiz = Math.sqrt(numero)

    if (numero >= 1000 && numero <= 9999){
        if(soma === raiz){
            console.log('Quadrado perfeito')
        }else{
            console.log('Quadrado imperfeito')
        }
    }else{
        console.log('Quantidade de digitos insuficientes')
    }
}

main()