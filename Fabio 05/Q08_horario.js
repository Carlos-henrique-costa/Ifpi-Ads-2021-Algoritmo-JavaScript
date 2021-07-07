const prompt = require('prompt-sync')()

function main(){
    const horario = prompt('Informe o horário[Hora:Minutos:Segundos]: ')

    let horas = ''
    let minutos = ''
    let segundos = ''

    for (let i = 0; i < horario.length; i++){
        let caractere = horario[i]

        if(caractere.charCodeAt(0) === 58 ){
            continue
        }else if(horas.length !== 2){
            horas = horas + caractere
        }else if(minutos.length !== 2){
            minutos = minutos + caractere
        }else{
            segundos = segundos + caractere
        }
    }

    if(horas >= 0){
        if(minutos >= 0 && minutos < 60){
            if(segundos >= 0 && segundos < 60){
                console.log(`${horas} horas, ${minutos} minutos e ${segundos} segundos.`)
            }else{
                console.log('Segundo invalido')
            }
        }else{
            console.log('Minuto invalido')
        }
    }else{
        console.log('Hora invalido')
    }
    
}

main()