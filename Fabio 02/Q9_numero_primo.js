const prompt = require('prompt-sync')()

function main(){
    const numero = Number(prompt('Digite um numeor de 0 a 100: '))

    if (numero >= 0 && numero <=100){
        if(numero === 2 || numero === 3 || numero === 5 || numero === 7){
            console.log('É um numero primo')
        }else if((numero % 2 === 0) || (numero % 3 === 0) || (numero % 5 === 0) || (numero % 7 === 0)){
            console.log('Nâo um numero primo')
        }else{
            console.log('É um numero primo')
        }
    }else {
        console.log('apenas numeros de 0 a 100')
    }
}

main()