
const banco_dados = (booleanos) => {
        const concluidos = []

        for (list_booleanos of booleanos)
        { concluidos.push(list_booleanos == true ? 'concluido' : 'Pendente')}
        return concluidos
}

console.log(banco_dados([true,false,true]))