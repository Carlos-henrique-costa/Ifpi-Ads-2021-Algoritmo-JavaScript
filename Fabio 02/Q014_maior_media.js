const prompt = require('prompt-sync')()

function main(){
    const numero1 = Number(prompt('Digite o primeiro numero: '))
    const numero2 = Number(prompt('Digite o segundo numero: '))
    const numero3 = Number(prompt('Digite o terceiro numero: '))
    const numero4 = Number(prompt('Digite o quarto numero: '))
    const numero5 = Number(prompt('Digite o quinto numero: '))

    const media = parseInt((numero1 + numero2 + numero3 + numero4 + numero5) / 5)
    console.log('Media: ',media)
    if(media >1){
        if(numero1 >= media){
            if( numero2 >= media){
                if(numero3 >= media){
                    if(numero4 >= media){
                        if(numero5 >= media){
                        }else{
                            console.log('O primeiro, segundo, terceiro e quarto numero2 são maiores que a media')
                        }
                    }else{
                        console.log('O primeiro, segundo e terceiro numero2 são maiores que a media')
                    }
                }else{
                    console.log('O primeiro e segundo numero2 são maiores que a media')
                }
            }else {
                console.log('O primeiro numero é maiores que a media')
            }
        }else if(numero2 >= media){
            if( numero1 >= media){
                if(numero3 >= media){
                    if(numero4 >= media){
                        if(numero5 >= media){
                        }else{
                            console.log('O primeiro, segundo, terceiro e quarto numero2 são maiores que a media')
                        }
                    }else{
                        console.log('O primeiro, segundo e terceiro numero2 são maiores que a media')
                    }
                }else{
                    console.log('O primeiro e segundo numero2 são maiores que a media')
                }
            }else {
                console.log('O segundo numero é maior que a media')
            }
        }if(numero3 >= media){
            if( numero1 >= media){
                if(numero2 >= media){
                    if(numero4 >= media){
                        if(numero5 >= media){
                        }else{
                            console.log('O primeiro, segundo, terceiro e quarto numero2 são maiores que a media')
                        }
                    }else{
                        console.log('O primeiro, segundo e terceiro numero2 são maiores que a media')
                    }
                }else{
                    console.log('O primeiro e segundo numero2 são maiores que a media')
                }
            }else {
                console.log('O terceiro numero é maior que a media')
            }
        }if(numero4 >= media){
            if( numero1 >= media){
                if(numero2 >= media){
                    if(numero3 >= media){
                        if(numero5 >= media){
                        }else{
                            console.log('O primeiro, segundo, terceiro e quarto numero2 são maiores que a media')
                        }
                    }else{
                        console.log('O primeiro, segundo e terceiro numero2 são maiores que a media')
                    }
                }else{
                    console.log('O primeiro e segundo numero2 são maiores que a media')
                }
            }else {
                console.log('O quarto numero é maior que a media')
            }
        }if(numero5 >= media){
            if( numero1 >= media){
                if(numero2 >= media){
                    if(numero3 >= media){
                        if(numero4 >= media){
                            console.log('Todos os numeros iguais!')
                        }else{
                            console.log('O primeiro, segundo, terceiro e quarto numero2 são maiores que a media')
                        }
                    }else{
                        console.log('O primeiro, segundo e terceiro numero2 são maiores que a media')
                    }
                }else{
                    console.log('O primeiro e segundo numero2 são maiores que a media')
                }
            }else {
                console.log('O quinta numero é maior que a media')
            }
        }
    }else{
      console.log('Nenhum numero maior que a media')
    }
}

main()