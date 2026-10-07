
const produtos = [ { nome: 'Teclado', preco: 100 }, { nome: 'Mouse', preco: 50 } ];

const promocao = produtos.map(produto => produto.preco-produto.preco*0.10)

let produto_promocao = []
let posicao = 0
for (const produto of produtos)
{
     produto_promocao.push({...produto, preco: promocao[posicao]})
     posicao++
}

console.log(produto_promocao)