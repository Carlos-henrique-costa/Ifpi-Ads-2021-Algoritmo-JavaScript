const prompt = require('prompt-sync')()

function main(){
    const angulo = Number(prompt('Digite uma medida do angulo(Entre 0 e 360: '))

    if(angulo <= 90){
        console.log('primeiro quandrante')
    }else if( angulo > 90 && angulo <= 180){
        console.log('segundo quandrante')
    }else if(angulo > 180 && angulo <= 270){
        console.log('terceiro quandrante')
    }else if( angulo > 270 && angulo<= 360){
        console.log('quarto quandrante')
    }else{
        console.log('angulo invalido')
    }
}

main()