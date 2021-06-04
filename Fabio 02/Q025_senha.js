const prompt = require('prompt-sync')()

function main(){
    const senha = prompt('Digite uma senha: ')

    if (senha === '1234'){
        console.log('Acesso permitido!')
    }else{
        console.log('Acesso não permitido!')
    }
}

main()