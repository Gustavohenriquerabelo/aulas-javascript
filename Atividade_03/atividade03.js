
function estoque(quant){
    if (quant < 5) 
        {return "estoque crítico!!"}
    else 
        {return "estoque normal!!"}
}

console.log(estoque(4))