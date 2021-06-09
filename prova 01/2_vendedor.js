const prompt = require('prompt-sync')()

function main(){
    const nome = prompt('Informe o nome do vendedor: ')
    const total_vendido = Number(prompt('Digite o total de vendas no mês: '))

    const salario_base = 1100

    if(total_vendido <= 5000){
        console.log('Sem comissão')
    }else if( total_vendido > 5000 && total_vendido <= 10000){
        const comissão = (total_vendido - 5000) * 0.05
        const salario_final = salario_base + comissão
        console.log(`${nome} seu salario sabe é ${salario_base}, `)
        console.log(`sua comissão é de ${comissão}`)
        console.log(`e seu salario final é ${salario_final}`)
    }else if(total_vendido > 10000 && total_vendido < 30000){
        if(total_vendido - 5000 < 10000){
            const comissão = (total_vendido - 10000) * 0.10 + 250
            const salario_final = salario_base + comissão
            console.log(`${nome} seu salario sabe é ${salario_base}, `)
            console.log(`sua comissão é de ${comissão}`)
            console.log(`e seu salario final é ${salario_final}`)
        }else if(total_vendido - 5000 >= 10000){
            const comissão = ((total_vendido - 10000) * 0.10) + 250
            const salario_final = salario_base + comissão
            console.log(`${nome} seu salario sabe é ${salario_base}, `)
            console.log(`sua comissão é de ${comissão}`)
            console.log(`e seu salario final é ${salario_final}`)
        }
    }else if(total_vendido >= 30000){
        const comissão = total_vendido * 0.20
        const salario_final = salario_base + comissão
        console.log(`${nome} seu salario sabe é ${salario_base}, `)
        console.log(`sua comissão é de ${comissão}`)
        console.log(`e seu salario final é ${salario_final}`)
    }else{
        console.log('Valor invalido')
    }
}

main()