
const bissextos = (anofinal) => {

  for (let i = 2000; i <= anofinal; i++)
  {
    if (i%4 == 0)
    {
        console.log(`O ano ${i} é bissexto`)
    }
  }
}

bissextos(3000)