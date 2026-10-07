const elementosFake = [
  {
    tagName: 'DIV',
    style: { color: 'blue', display: 'flex' },
    classList: ['container', 'active']
  },
  {
    tagName: 'H1',
    style: { color: 'red', display: 'block' },
    classList: ['title']
  },
  {
    tagName: 'BUTTON',
    style: { color: 'blue', display: 'inline-block' },
    classList: ['btn', 'btn-primary']
  }
];

for (const chave in elementosFake)
{if (elementosFake[chave].style.color == 'blue'){console.log(`O elemento [tagName] é azul!`)}}