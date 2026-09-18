
const energia = function(energiaInicial)
{
    while(energiaInicial >= 0)
    {console.log(`energia: ${energiaInicial}%`)
        energiaInicial -= 10
    }
}

energia(100)