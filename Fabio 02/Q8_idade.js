const prompt = require('prompt-sync')()

function main(){
    const data_dia = Number(prompt('Digite o dia atual: '))
    const data_mes = Number(prompt('Digite o mês atual: '))
    const data_ano = Number(prompt('Digite o ano atual: '))

    const nascimento_dia = Number(prompt('Digite o dia do nascimento: '))
    const nascimento_mes = Number(prompt('Digite o mês do nascimento: '))
    const nascimento_ano = Number(prompt('Digite o ano do nascimento: '))

    const soma_idade = data_ano - nascimento_ano

    console.log('A idade em anos é: ', soma_idade)

}

main()