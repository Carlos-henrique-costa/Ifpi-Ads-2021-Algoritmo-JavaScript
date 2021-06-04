const prompt = require('prompt-sync')()

function main(){
    const a = Number(prompt('Digite o valor de A:'))
    const b = Number(prompt('Digite o valor de B:'))
    const c = Number(prompt('Digite o valor de C:'))

    const delta = Math.pow(b, 2) - 4 * (a * c)
    const x1 = ((-(b)) + Math.sqrt(delta)) / (2 * a)
    const x2 = ((-(b)) - Math.sqrt(delta)) / (2 * a)

    if(a !== 0){
        console.log('O valor de delta é: ', delta)
        console.log('O valor de x1 é: ', x1)
        console.log('O valor de x2 é: ', x2)
    }else{
        console.log('A deve ser diferente de 0')
    }

}

main()