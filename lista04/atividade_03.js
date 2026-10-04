
const carrinho = [25.50, 10.00, 100.00, 5.00];
const total = carrinho.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(`O total do carrinho é: R$ ${total.toFixed(2)}`);