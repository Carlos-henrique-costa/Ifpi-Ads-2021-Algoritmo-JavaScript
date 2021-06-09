const prompt = require('prompt-sync')()

function main(){
    const media_anterior = Number(prompt('Digite a media de casos dos ultimos 14 dias: '))
    const media_atual = Number(prompt('Digite a media de casos dos dias atuais: '))

    const media_percentual = ((media_atual - media_anterior) / media_anterior) * 100
    
    if(media_atual - media_anterior <= (0.15 * media_anterior) && media_anterior - media_atual <= (0.15 * media_anterior)){
        console.log('Em estabilidade')
        console.log(`Media_percentual ${media_percentual}%`)
    }else if(media_atual - media_anterior >= (0.15 * media_anterior)){
        console.log('Em alta')
        console.log(`Media_percentual ${media_percentual}%`)
    }else{
        console.log('Em queda')
        console.log(`Media_percentual ${media_percentual}%`)
    }

}

main()