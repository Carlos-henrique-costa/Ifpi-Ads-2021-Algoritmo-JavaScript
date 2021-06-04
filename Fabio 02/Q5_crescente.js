const prompt = require('prompt-sync')()

function main(){
    const numero1 = prompt("digite o primeiro numero: ")
    const numero2 = prompt("digite o segundo numero: ")
    const numero3 = prompt("digite o terceiro numero: ")

    if(numero1 > numero2 && numero1 > numero3 && numero2 > numero3){
        console.log(numero1, numero2, numero3)
    }else if(numero2 > numero1 && numero2 > numero3 && numero1 > numero3){
        console.log(numero2, numero1 , numero3)
    }else if(numero3 > numero1 && numero3 > numero2 && numero1 > numero2){
        console.log(numero3, numero1, numero2)
    }else if(numero1 > numero2 && numero1 > numero3 && numero3 > numero2){
        console.log(numero1, numero3, numero2)
    }else if(numero2 > numero1 && numero2 > numero3 && numero3 > numero1){
        console.log(numero2, numero3 , numero1)
    }else if(numero3 > numero1 && numero3 > numero2 && numero2 > numero1){
        console.log(numero3, numero2, numero1)
    }else{
        console.log('dois ou três numeros iguais')
    }
}

main()