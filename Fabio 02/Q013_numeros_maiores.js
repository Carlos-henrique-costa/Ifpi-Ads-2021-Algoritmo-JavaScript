const prompt = require('prompt-sync')()

function main(){
    const numero1 = prompt('Digite o primeiro numero: ')
    const numero2 = prompt('Digite o segundo numero: ')
    const numero3 = prompt('Digite o terceiro numero: ')
    const numero4 = prompt('Digite o quarto numero: ')
    const numero5 = prompt('Digite o quinto numero: ')

    if(numero1 > numero2 && numero1 > numero3 && numero1 > numero4 && numero1 > numero5){
        if(numero2 < numero3 && numero2 < numero4 && numero2 < numero5){
            console.log('O maior numero é: ', numero1, 'menor numero é: ', numero2)
        }else if(numero3 < numero2 && numero3 < numero4 && numero3 < numero5){
            console.log('O maior numero é: ', numero1, 'menor numero é: ', numero3)
        }else if(numero4 < numero2 && numero4 < numero3 && numero4 < numero5){
            console.log('O maior numero é: ', numero1, 'menor numero é: ', numero4)
        }else if(numero5 < numero2 && numero5 < numero3 && numero5 < numero4){
            console.log('O maior numero é: ', numero1, 'menor numero é: ', numero5)
        }
    }else if(numero2 > numero1 && numero2 > numero3 && numero2 > numero4 && numero2 > numero5){
        if(numero1 < numero3 && numero1 < numero4 && numero1 < numero5){
            console.log('O maior numero é: ', numero2, 'menor numero é: ', numero1)
        }else if(numero3 < numero1 && numero3 < numero4 && numero3 < numero5){
            console.log('O maior numero é: ', numero2, 'menor numero é: ', numero3)
        }else if(numero4 < numero1 && numero4 < numero3 && numero4 < numero5){
            console.log('O maior numero é: ', numero2, 'menor numero é: ', numero4)
        }else if(numero5 < numero1 && numero5 < numero3 && numero5 < numero4){
            console.log('O maior numero é: ', numero2, 'menor numero é: ', numero5)
        }
    }else if(numero3 > numero1 && numero3 > numero2 && numero3 > numero4 && numero3 > numero5){
        if(numero1 < numero2 && numero1 < numero4 && numero1 < numero5){
            console.log('O maior numero é: ', numero3, 'menor numero é: ', numero1)
        }else if(numero2 < numero1 && numero2 < numero4 && numero2 < numero5){
            console.log('O maior numero é: ', numero3, 'menor numero é: ', numero2)
        }else if(numero4 < numero1 && numero4 < numero2 && numero4 < numero5){
            console.log('O maior numero é: ', numero3, 'menor numero é: ', numero4)
        }else if(numero5 < numero1 && numero5 < numero2 && numero5 < numero4){
            console.log('O maior numero é: ', numero3, 'menor numero é: ', numero5)
        }
    }else if(numero4 > numero1 && numero4 > numero2 && numero4 > numero3 && numero4 > numero5){
        if(numero1 < numero2 && numero1 < numero3 && numero1 < numero5){
            console.log('O maior numero é: ', numero4, 'menor numero é: ', numero1)
        }else if(numero2 < numero1 && numero2 < numero3 && numero2 < numero5){
            console.log('O maior numero é: ', numero4, 'menor numero é: ', numero2)
        }else if(numero3 < numero1 && numero3 < numero2 && numero3 < numero5){
            console.log('O maior numero é: ', numero4, 'menor numero é: ', numero3)
        }else if(numero5 < numero1 && numero5 < numero2 && numero5 < numero3){
            console.log('O maior numero é: ', numero4, 'menor numero é: ', numero5)
        }
    }else if(numero5 > numero1 && numero5 > numero2 && numero5 > numero3 && numero5 > numero4){
        if(numero1 < numero2 && numero1 < numero3 && numero1 < numero4){
            console.log('O maior numero é: ', numero5, 'menor numero é: ', numero1)
        }else if(numero2 < numero1 && numero2 < numero3 && numero2 < numero4){
            console.log('O maior numero é: ', numero5, 'menor numero é: ', numero2)
        }else if(numero3 < numero1 && numero3 < numero2 && numero3 < numero4){
            console.log('O maior numero é: ', numero5, 'menor numero é: ', numero3)
        }else if(numero4 < numero1 && numero4 < numero2 && numero4 < numero3){
            console.log('O maior numero é: ', numero5, 'menor numero é: ', numero4)
        }
    }else{
        console.log('Dois ou mais numeros iguais!')
    }
}

main()