
const missoes = [
                 ['Derrotar chefe',500, ],
                 ['Encontrar tesouro',200, ],
                 ['Salvar personagem', 800, ],
                 ['Explorar mapa',100, ]]
                
                
                   

const analisarMissoes = (missoes) => {

    let i = 0
    for (list_missoes of missoes)
    {
        
        if (missoes[i][1] >= 500) {missoes[i][2] = "missão difícil"}
        else if (missoes[i][1] >= 200 & missoes[i][1] < 500) {missoes[i][2] = "missão média"}
        else if (missoes[i][1] < 200) {missoes[i][2] = "missão fácil"}
        i++
    }
    return missoes
}

analisarMissoes(missoes)

i = 0
while (i < missoes.length)
{
    console.log(missoes[i][0], "-", missoes[i][2])
    i++
}