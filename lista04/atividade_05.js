
const apiProdutos = [ 
            { id: 101, nome: 'monitor led', preco: 899.9 }, 
            { id: 102, nome: 'teclado mecanico', preco: 250.0 }, 
            { id: 103, nome: 'mouse gamer', preco: 125.45 } 
];

const nomes = apiProdutos.map(produto => produto.nome.charAt(0).toUpperCase() + produto.nome.slice(1));
const precos_formatados = apiProdutos.map(produto => `R$${produto.preco.toFixed(2)}`);

let produtosFormatados = [];
let i = 0

for (const produto of apiProdutos){
produtosFormatados.push({...produto, nome: nomes[i], preco: precos_formatados[i]});
i++
}

console.log(produtosFormatados);
