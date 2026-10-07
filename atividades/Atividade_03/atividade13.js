
const frete = valor_compra => valor_compra > 150 ? 'Frete Grátis' : 'Cobrar Frete';

console.log(frete(150))