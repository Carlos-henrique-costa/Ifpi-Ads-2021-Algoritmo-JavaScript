const prompt = require('prompt-sync')()

function main(){
    const nota1 = Number(prompt('Digite a primeira nota: '))
    const nota2 = Number(prompt('Digite a segunda nota: '))

    const media = (nota1 + nota2) / 2

    if (media >= 7){
        console.log('aluno aprovado!')
    }else if (media < 7){
        const nota_exame1 = Number(prompt('Digite a primeira nota do exame: '))
        const nota_exame2 = Number(prompt('Digite a primeira nota do exame: '))
        const media_final = (nota_exame1 + nota_exame2) / 2
        if(media_final >= 5){
            console.log('Aluno aprovado!')
        }else{
            console.log('Aluno reprovado!')
        }
    }

}

main()