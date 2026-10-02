
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
    style: { color: 'white', display: 'inline-block' },
    classList: ['btn', 'btn-primary']
  }
];

 let quant_classes = 0
for (const chaves in elementosFake)
{
    let classes = elementosFake[chaves].classList.join(', ')
    quant_classes += elementosFake[chaves].classList.length
   console.log(`\nO nome do elemento é: ${elementosFake[chaves].tagName} e possui ${elementosFake[chaves].classList.length} Classes;\n TAGS: ${classes}`)
}

//------------------------------------------------------------ atividade 3,4 e 5
