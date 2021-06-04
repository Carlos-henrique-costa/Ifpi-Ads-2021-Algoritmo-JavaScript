const prompt = require('prompt-sync')()

function main(){
    const data_dia = Number(prompt('Digite o dia: '))
    const data_mes = Number(prompt('Digite o mês: '))
    const data_ano = Number(prompt('Digite o ano: '))

    if(data_dia>=1 && data_dia <=31){
        if(data_mes>=1 && data_mes <=12){
            if(data_ano>=1){
                console.log('Data valida!')
            }else {
                console.log('Data invalida')
            }
        }else {
            console.log('Data invalida')
        }
    }else {
        console.log('Data invalida')
    }

}

main()