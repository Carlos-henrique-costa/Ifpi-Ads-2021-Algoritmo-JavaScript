const prompt = require('prompt-sync')()

function main(){
    const nascimento_dia = Number(prompt('Digite o dia do nascimento: '))
    const nascimento_mes = Number(prompt('Digite o mês do nascimento: '))
    const nascimento_ano = Number(prompt('Digite o ano do nascimento: '))
    
    const data_dia = Number(prompt('Digite o dia atual: '))
    const data_mes = Number(prompt('Digite o mês atual: '))
    const data_ano = Number(prompt('Digite o ano atual: '))

    const idade_dia = Math.abs(data_dia - nascimento_dia)
    const idade_mes = Math.abs(data_mes - nascimento_mes)
    const idade_ano = data_ano - nascimento_ano
    
    if(nascimento_dia > 0 && nascimento_dia < 32){
        if(nascimento_mes > 0 && nascimento_mes < 13){
            if(nascimento_ano > 0){
                if(data_dia > 0 && data_dia < 32){
                    if(data_mes > 0 && data_mes < 13){
                        if(data_ano > 0){
                            console.log('A idade é: ', idade_ano, 'anos,', idade_mes, 'meses', idade_dia, 'dias')
                        }else{
                            console.log('Ano atual invalido')
                        }
                    }else{
                        console.log('Mês atual invalido')
                    }
                }else{
                    console.log('Dia atual invalido')
                }
            }else{
                console.log('Ano nascimento invalido')
            }
        }else{
            console.log('Mês nascimento invalido')
        }
    }else{
        console.log('Dia nascimento invalido')
    }
   
}

main()
