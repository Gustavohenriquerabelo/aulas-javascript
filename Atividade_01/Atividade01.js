
const item = [
                [0,"Espada das sombras",1000, ,0],
                [1,"Asas douradas",400, ,20],
                [2,"Capacede de Neon",90, ,10],
                [3,"Pet dragão",0, ,9],
                [4,"Skin Cyberpunk",400, ,12]
                ]
// matriz que armazena as informações de cada item.
/*
-----------------------
Indice da matriz
-------------------------
id = 0
nome = 1
preçõ = 2
raridade = 3
quantidade = 4
*/

let id = 4 // ID do item escolhido
if (id >= item.length){id = 0} // Se o ID for maior ele volta para o padrão 


//  npm install readline-sync --> instalar a biblioteca
const readlineSync = require('readline-sync'); // carrega a biblioteca dentro da const readlineSync

//---------------------------------------------------------------------------------------- ETAPA 2 ----------------------------------------------------------------------------------

if (item[id][2] < 100) {
      item[id][3] = "Comum" // SE O VALOR FOR MENOR QUE 100 ELE É COMUM
    }
  else if (item[id][2] >= 100 && item[id][2] < 500){
      item[id][3] = "Raro" // SE O VALOR VALER MAIS/IGUAL A 100 E MENOR QUE 500 ELE É RARO
  }
  else if (item[id][2] >= 500){
    item[id][3] = "Lendário" // SE O ITEM VALER MAIS/IGUAL A 500 ELE É LENDÁRIO
}
//----------------------------------------------------------------------- ETAPA 2,5 ------------------------------------------------------------------------------------------------

let status = ""  // CRIA A VARIAVEL PARA SER STAUS
const em_destaque = item[id][2] >= 500 // ARMAZENA O VALOR BOOLEANO DEV SE O ITEM VALE MAIS OU IGUAL A 500
if (em_destaque == true){status = "-DESTAQUE-"} // SE ELE REALMENTE VALER MAIS OU IGUAL A 500 STATUS RECEBE "-DESTAQUE-"

if (item[id][4] <= 0 || item[id][2] <= 0){status = "Indiponível"} // SE O ITEM TIVER PREÇO 0 OU NÃO TIVER ESTOQUE STATUS RECEBE "INDIPONÍVEL"

//---------------------------------------------------------------------- ETAPA 1 ----------------------------------------------------------------------------------------------------

console.log("--------------------------------")
console.log("|####### FICHA DO ITEM  #######|")
console.log("|------------------------------|")
console.log(`  ${status}                   `)
console.log(`  NOME: ${item[id][1]}           `)
console.log(`  PREÇO: R$ ${item[id][2]}       `)
console.log(`  RARIDADE: ${item[id][3]}       `)
console.log(`  ESTOQUE: ${item[id][4]}        `)
console.log("--------------------------------")
console.log(`                                 `)
// DESENHO DE FICHA DO ITEM COM VALORES DE CADA COLUNA DO ITEM ID 


readlineSync.question('Digite qualquer tecla para continuar: '); // CONTROLE PARA A PROXIMA PARTE
console.clear(); // LIMPA A TELA PARA DEIXAR MAIS LIMPO

//------------------------------------------------------------------------------- ETAPA 3 ---------------------------------------------------------------------------------------------

console.log("--------------------------------")
console.log("|####### CADASTRAR ITEM #######|") // DESENHO CABEÇALHO DE CADASTRO
console.log("|------------------------------|")
console.log(`                                 `)

for (let i = 0; i < 5; i++) // FAZ O CÓDIGO DE 0 ATÉ 5
{
    if ( (i+1) % 2 == 0) // SE A POSIÇÃO FOR PAR ELE ESCREVE:
        { console.log(`Item ${i+1} - Cadastrado como promoção semanal com sucesso!!\n`)}
    else 
        {console.log(`Item ${i+1} - Cadastrado com sucesso!!\n`)} // SE NÃO FOR PAR ELE ESCREVE:
}

console.log("--------------------------------")
console.log("                                ")

readlineSync.question('Digite qualquer tecla para continuar: '); // CONTROLE PARA A PROXIMA PARTE
console.clear(); // LIMPA A TELA PARA DEIXAR MAIS LIMPO

//----------------------------------------------------------------------------------- ETAPA 4 ------------------------------------------------------------------------------------------

console.log("--------------------------------")
console.log("|########### COMPRAS ##########|") // DESENHO CABEÇALHO DE COMPRAS
console.log("|------------------------------|")
console.log(`                                 `)

while  (item[id][4] >= 0 ) // ENQUANTO A QUANTIDADE EM ESTOQUE FOR MAIOR OU IGUAL A 0
{
    
    if (item[id][4] > 1) { //SE FOR MAIOR QUE 1
         item[id][4]-- //DIMINUI 1 
        console.log(` -ITEM COMPRADO-\n   quantidade restante: ${item[id][4]}\n`) // ESCREVE A QUANTIDADE ATUAL DO ITEM
         
        }
    else if(item[id][4] = 1){ //QUANDO O ITEM FOR IGUAL A 1 (QUE ELE JÁ DEVE TER SIDO ESCRITO) ELE DIGITA "ITEM ESGOTADO"
         console.log("ITEM ESGOTADO!")
          item[id][4] = -1 // VALOR DO ESTOQUE PASSA PARA -1 PARA SAIR DO WHILE
    }
}

console.log("--------------------------------")
console.log("                                ")

readlineSync.question('Digite qualquer tecla para continuar: '); // CONTROLE PARA A PROXIMA PARTE
console.clear(); // LIMPA A TELA PARA DEIXAR MAIS LIMPO

//---------------------------------------------------------------- ETAPA 5 -----------------------------------------------------------------------------------------------------------

console.log("--------------------------------")
console.log("|####### LISTA DE ITENS #######|") // DESENHO CABEÇALHO DE COMPRAS
console.log("|------------------------------|")
console.log(`                                 `)

for (i = 0; i < item.length; i++) // RODA POR TODA A MATRIZ ATÉ CHEGAR NO UULTIMO ID
{console.log(` 🛒 |${item[i][1]}| \n`)} // DIGITA O NOME DO ITEM ATUAL COM EMOJI

console.log("--------------------------------")
console.log("                                ")