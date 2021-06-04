const prompt = require('prompt-sync')()

function main(){
    console.log('Primeira data')
    const dia1 = Number(prompt('Digite o dia: '))
    const mes1 = Number(prompt('Digite o mês: '))
    const ano1 = Number(prompt('Digite o ano: '))
    console.log('segunda data')
    const dia2 = Number(prompt('Digite o dia: '))
    const mes2 = Number(prompt('Digite o mês: '))
    const ano2 = Number(prompt('Digite o ano: '))

    if(dia1 > 0 && dia1 < 32){
        if(mes1 > 0 && mes1 < 13){
            if(ano1 > 0){
                if(dia2 > 0 && dia2 < 32){
                    if(mes2 > 0 && mes2 < 13){
                        if(ano2 > 0){
                            if(dia1 > dia2){
                                if(mes1 > mes2){
                                    if(ano1 > ano2){
                                        console.log('A primeira data é mais recente')
                                    }else{
                                        console.log('segunda data é mais recente')
                                    }
                                }else if(mes1 === mes2){
                                    if(ano2 > ano1){
                                        console.log('segunda data é mais recente')
                                    }else{
                                        console.log('A primeira data é mais recente')
                                    }
                                }
                            }else if(dia1 === dia2){
                                if(mes1 > mes2){
                                    if(ano2 > ano1){
                                        console.log('segunda data é mais recente')
                                    }else{
                                        console.log('A primeira data é mais recente')
                                    }
                                }else if(mes1 === mes2){
                                    if(ano1 > ano2){
                                        console.log('A primeira data é mais recente')
                                    }else if(ano1 === ano2){
                                        console.log('datas iguais')
                                    }else{
                                        console.log('segunda data é mais recente')
                                    }
                                }
                                else{
                                    console.log('segunda data é mais recente')
                                }
                            }else{
                                console.log('segunda data é mais recente')
                            }
                        }else{
                            console.log('ano invalida')
                        }
                    }else{
                        console.log('mes invalida')
                    }
                }else{
                    console.log('dia invalida')
                }
            }else{
                console.log('ano invalida')
            }
        }else{
            console.log('mês invalida')
        }
    }else{
        console.log('dia invalida')
    }
}

main()