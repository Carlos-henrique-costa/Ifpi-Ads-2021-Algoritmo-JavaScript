const prompt = require('prompt-sync')()

function main(){
    const opcao = prompt('Digite uma opção de 1 a 3: ')
    const num1 = prompt('Digite o valor de 1: ')
    const num2 = prompt('Digite o valor de 2: ')
    const num3 = prompt('Digite o valor de 3: ')

    if(opcao > 0 && opcao < 4){
        if (opcao > 0 && opcao < 2){
            console.log(num1)
        }else if (opcao > 1 && opcao < 3){
            console.log(num2)
        }else if(opcao > 2 && opcao < 4){
            console.log(num3)
        }else{
            console.log('???')
        }
    }else {
        console.log('Opcão invalida')
    }
}

main()