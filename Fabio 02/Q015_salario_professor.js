const prompt = require('prompt-sync')()

function main(){
    const horas1 = Number(prompt('Digite a quantidade de horas aulas do professor 1: '))
    const valor1 = Number(prompt('Digite o valor da h/a do professor 1: '))
    const horas2 = Number(prompt('Digite a quantidade de horas aulas do professor 2: '))
    const valor2 = Number(prompt('Digite o valor da h/a do professor 2: '))

    const professor1 = horas1 * valor1
    const professor2 = horas2 * valor2

    if (professor1 > professor2){
        console.log('O primeiro professor tem um salario total maior!')
    }else if( professor2 === professor2){
        console.log('Os professores ganham o mesmo valor')
    }else{
        console.log('O segundo professor tem um salario total maior!')
    }
    
}

main()