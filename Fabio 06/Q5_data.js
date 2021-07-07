const prompt = require('prompt-sync')()

function main(){
    let data = prompt('Informe a data[dia/mês/ano]: ')
    let dia = ''
    let mes = ''
    let ano = ''

    for (let i = 0; i < data.length; i++){
        let caractere = data[i]

        if(caractere.charCodeAt(0) === 47){
            continue
        }else if(dia.length !== 2){
            dia = dia + caractere
        }else if(mes.length !== 2){
            mes = mes + caractere
        }else{
            ano = ano + caractere
        }
    }
    if(dia > 0 && dia <= 32){
        if(mes > 0 && mes < 13){
            console.log(`${dia} de ${nome_mes(mes)} de ${ano}`)
        }else{
            console.log('Mês invalido')
        }
    }else{
        console.log('Dia invalido')
    }
}

function nome_mes(mes_nome) {
    let numero_mes = Number(mes_nome)

    if(numero_mes === 1){
            return 'janeiro'
        }else if(numero_mes === 2){
            return 'fevereiro'
        }else if(numero_mes === 3){
            return 'março'
        }else if(numero_mes === 4){
            return 'abril'
        }else if(numero_mes === 5){
            return 'maio'
        }else if(numero_mes === 6){
            return 'junho'
        }else if(numero_mes === 7){
            return 'julho'
        }else if(numero_mes === 8){
            return 'agosto'
        }else if(numero_mes === 9){
            return 'setembro'
        }else if(numero_mes === 10){
            return 'outubro'
        }else if(numero_mes === 11){
            return 'novembro'
        }else{
            return 'dezembro'
        }
}
main()