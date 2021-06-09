const prompt = require('prompt-sync')()

function main(){
    const nota1 = Number(prompt('Digite a primeira nota: '))
    const peso1 = 0.2
    const nota2 = Number(prompt('Digite a segunda nota: '))
    const peso2 = 0.3
    const atividade = Number(prompt('Digite a nota das atividades: '))
    const peso3 = 0.1

    const soma_nota = (nota1 * peso1)+(nota2*peso2)+(atividade*peso3)
    const soma_peso = (peso1 + peso2 + peso3)

    const media_semestral = (soma_nota)/(soma_peso)

    if (media_semestral >= 7){
        console.log('Sua nota é', media_semestral.toFixed(2), 'aluno aprovado!')
    }else if (media_semestral >= 4 && media_semestral < 7){
        console.log('Sua nota semestral é: ', media_semestral.toFixed(2))
        const prova_final = Number(prompt('Digite a nota da prova final: '))
        const media_final = ((media_semestral + prova_final) / 2).toFixed(2)
        if(media_final >= 6){
            console.log(`Sua nota final é ${media_final}, Aluno aprovado após prova final!`)
        }else{
            console.log(`Sua nota final é ${media_final}, Aluno reprovado após prova final!`)
        }
    }else{
        console.log('Sua nota é: ', media_semestral.toFixed(2), 'Aluno reprovado!')
    }
}

main()