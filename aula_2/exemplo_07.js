
const frutas = ['maçã', 'Banana', 'Uva']; //frutas

for (let i = 0; i <= frutas.length; i++)
{
   if (i < frutas.length){console.log(frutas[i], 'é a fruta', i + 1,'!!');}
   if (i >= frutas.length){console.log("---------------------------------------------------------")}
}
//---------------------------------------------------

frutas.unshift('pera', 'melão', 'kiwi'); //adiciona
for (let i = 0; i <= frutas.length; i++)
{
   if (i < frutas.length){console.log(frutas[i], 'é a fruta', i + 1,'!!');}
   if (i >= frutas.length){console.log("---------------------------------------------------------")}
}
//-----------------------------------------------------------

frutas.splice(1, 2); //remove
for (let i = 0; i <= frutas.length; i++)
{
   if (i < frutas.length){console.log(frutas[i], 'é a fruta', i + 1,'!!');}
   if (i >= frutas.length){console.log("---------------------------------------------------------")}
}
