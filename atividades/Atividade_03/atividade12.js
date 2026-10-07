

const aprovados = (notas) =>
{
   for (list_notas of notas) 
    {
        if (list_notas >= 7) 
         {console.log('Aprovado!')}
        else
         {console.log('Reprovado!')}
    }
}
aprovados([6, 7, 10])