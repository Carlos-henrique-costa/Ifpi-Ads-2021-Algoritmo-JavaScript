const prompt = require('prompt-sync')()

function main(){
    const inicio_hora = Number(prompt('Digite o inicio do jogo[horas]: '))
    const inicio_minuto = Number(prompt('Digite o inicio do jogo[minutos]: '))
    const fim_hora = Number(prompt('Digite o fim do jogo[horas]: '))
    const fim_minuto = Number(prompt('Digite o fim do jogo[minutos]: '))

    if( inicio_hora >= 0 && inicio_hora < 24){
        if(inicio_minuto >= 0 && inicio_minuto < 60){
            if(fim_hora >= 0 && fim_hora < 24){
                if(fim_minuto >= 0 && fim_minuto < 60){
                    if(inicio_hora >= fim_hora && inicio_minuto > fim_minuto){
                        const duracao_hora = (24 -(inicio_hora - fim_hora)) - 1
                        const duracao_minuto = 60 - (inicio_minuto - fim_minuto)
                        console.log('total de horas: ', duracao_hora, 'e', duracao_minuto, 'minutos')
                    }else if(inicio_hora >= fim_hora && inicio_minuto < fim_minuto){
                        const duracao_hora = (24 -(inicio_hora - fim_hora)) - 1
                        const duracao_minuto = fim_minuto - inicio_minuto
                        console.log('total de horas: ', duracao_hora, 'e', duracao_minuto, 'minutos')
                    }else if(inicio_hora <= fim_hora && inicio_minuto > fim_minuto){
                        const duracao_hora = (fim_hora - inicio_hora)
                        const duracao_minuto = 60 - (inicio_minuto - fim_minuto)
                        console.log('total de horas: ', duracao_hora, 'e', duracao_minuto, 'minutos')
                    }else if(inicio_hora === fim_hora && inicio_minuto === fim_minuto){
                        console.log('O jogo durou um dia')
                    }else {
                        const duracao_hora = fim_hora - inicio_hora
                        const duracao_minuto = fim_minuto - inicio_minuto
                        console.log('total de horas: ', duracao_hora, 'e', duracao_minuto, 'minutos')
                    }
                }else{
                    console.log('Minuto finall invalido')
                }
            }else{
                console.log('hora final invalida')
            }
        }else{
            console.log('Minuto inicial invalido')
        }
    }else{
        console.log('hora inicial invalida')
    }
}

main()