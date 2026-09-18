
const caixa_mercado = (precos) =>{
    let total = 0
    
    for (list_precos of precos)
    {
        total += list_precos
    }
    return total
} 

console.log(`O valor total é: ${caixa_mercado([150,50,25])}`)