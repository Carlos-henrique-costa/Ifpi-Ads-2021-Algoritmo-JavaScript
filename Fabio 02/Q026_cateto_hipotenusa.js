const prompt = require('prompt-sync')()

function main(){
    const lado1 = Number(prompt('Digite o primeiro lado do triangulo:'))
    const lado2 = Number(prompt('Digite o segundo lado do triangulo:'))
    const lado3 = Number(prompt('Digite o terceiro lado do triangulo:'))

    if(lado1 > lado2 && lado1 > lado3){
        console.log('Hipotenusa: ', lado1, 'Catelos: ', lado2, 'e', lado3)
    }else if(lado2 > lado1 && lado2 > lado3){
        console.log('Hipotenusa: ', lado2, 'Catelos: ', lado1, 'e', lado3)
    }else {
        console.log('Hipotenusa: ', lado3, 'Catelos: ', lado1, 'e', lado2)
    }

}

main()