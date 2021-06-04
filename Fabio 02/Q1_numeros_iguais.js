const prompt = require('prompt-sync')()

function main(){
    //Entrada
    const numero1 = Number(prompt('Digite o primeiro numero: '))
    const numero2 = Number(prompt('Digite o segundo numero: '))
    const numero3 = Number(prompt('Digite o terceiro numero: '))

    //Processamento
    
    if (numero1 === numero2 && numero1 === numero3){
        console.log('todos iguais')
    }else  if (numero1 === numero2 || numero1 === numero3 || numero2 === numero3){
        console.log('dois numeros iguais!')
    }else {
        console.log('Nenhum numero igual')
    }

}

main()