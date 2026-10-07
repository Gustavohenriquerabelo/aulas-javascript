
const lista_vip = (vips, nomebusca) => {

    for (list_vips of vips)
    {
        if (list_vips == nomebusca)
        {return true}
        else 
        {return false}
    }
}

console.log(`Nome na lista: ${lista_vip(['gustavo','davi','samuel','gabriel'], 'gustavo')}`)