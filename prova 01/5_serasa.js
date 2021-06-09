const prompt = require('prompt-sync')();

function main() {
    const valorA = Number(prompt('Digite o valor do critério A de (0 a 100): '))
    const valorB = Number(prompt('Digete o valor do critério B de (0 a 100): '))
    const valorC = Number(prompt('Digite o valor do critério C de (0 a 100): '))

    const score1 = ((valorA * 2.6) + (valorB * 5.7) + (valorC * 1.7)).toFixed(2)
    const score2 = ((valorA * 6.2) + (valorB * 1.9) + (valorC * 1.9)).toFixed(2)
    
    if(score1 >= 800 && score1 <= 1000){
        console.log(`Score 1.0: ${score1} , Muito bom`)
    }else if(score1 >= 600 && score1 < 800){
        console.log(`Score 1.0: ${score1} , Bom`)
    }else if(score1 >= 400 && score1 < 600){
        console.log(`Score 1.0: ${score1} , Regular`)
    }else{
        console.log(`Score 1.0: ${score1} , Baixo`)
    }
    
    if(score2 >= 700 && score2 <= 1000){
        console.log(`Score 2.0: ${score2} , Muito bom`)
    }else if(score2 >= 501 && score2 < 700){
        console.log(`Score 2.0: ${score2} , Bom`)
    }else if(score2 >= 301 && score2 < 500){
        console.log(`Score 2.0: ${score2} , Regular`)
    }else{
        console.log(`Score 2.0: ${score2} , Baixo`)
    }
}

main()