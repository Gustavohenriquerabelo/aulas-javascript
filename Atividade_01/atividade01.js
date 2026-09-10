
const item = [
                [0,"Espada das sombras",1000, ,0],
                [1,"Asas douradas",400, ,1],
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

//------------------------------------------- função cadastrar ----------------------------------------

function cadastro(){

    console.log("--------------------------------")
    console.log("|####### CADASTRAR ITEM #######|") // DESENHO CABEÇALHO DE CADASTRO
    console.log("|------------------------------|")
     
    let nome = readlineSync.question('\n Nome: '); // pergunta o nome do item em cadastro
    let valor = (readlineSync.question('\n valor do item: ')); // pergunta o valor do item
    while(isNaN(valor)) // verifica se o valor é um número
    {valor = (readlineSync.question('\n Digite um valor valido: '));} // resultado caso o valor não seja um número

    let quant = readlineSync.question('\n Quantidade no estoque: '); // pergunta o valor de estoque

    while(isNaN(quant)) //verifica se o valor é um número
        {quant = (readlineSync.question('\n Digite um valor valido: '));}

    item.push([item.length, nome, valor, , quant]); // envia as informações para a matriz de items
    
    console.log("--------------------------------")
    console.log("Item cadastrado com sucesso!!\n") // resposta de execução bem sucedida

    
    readlineSync.question('Digite qualquer tecla para voltar: '); // CONTROLE PARA A PROXIMA PARTE
    console.clear(); // LIMPA A TELA PARA DEIXAR MAIS LIMPO

}

//-------------------------------------------- função Comprar --------------------------------------------

function Compra(){

    console.log("--------------------------------")
    console.log("|########### COMPRAS ##########|") // DESENHO CABEÇALHO DE COMPRAS
    console.log("|------------------------------|")
    console.log(`                                 `)
  
    let status // váriavel status para definir se o produto está em estoque

   
    
    for (i = 0; i < item.length; i++) // RODA POR TODA A MATRIZ ATÉ CHEGAR NO UULTIMO ID
    
    {
        if (item[i][4] <= 0) {status = "-Esgotado-"} // se o estoque for 0, ele fica esgotaado
        console.log(` 🛒 |${item[i][1]}| [${item[i][0]}] ${status}\n R$ ${item[i][2]} `) //para cada item digita o nome, ID e status
        status = "" // renova o status para nada
    } // DIGITA O NOME DO ITEM ATUAL COM EMOJI

    let resposta = readlineSync.question('Digite qual item deseja: '); // recebe a escolha


    while (resposta >= item.length) // enquanto a resposta for maior que o numero de itens ele vai dar erro
    {resposta = readlineSync.question('Digite um item valido: ');}

    console.log("--------------------------------")
    console.log("                                ")

    if (item[resposta][4] <= 0) // se o estoque do item for 0 ou menor, ele ficara esgotado
    {console.log("Este item esta esgotado, sentimos muito.")}
    else {
        item[resposta][4]-- // se não, ele tira 1 do estoque e envia a menssagem!!
        console.log(`Item ${item[resposta][1]} foi comprado com sucesso!!`)
    }
    
    readlineSync.question('Digite qualquer tecla para voltar: '); // CONTROLE PARA A PROXIMA PARTE
    console.clear(); // LIMPA A TELA PARA DEIXAR MAIS LIMPO
}

//----------------------------------------------------- Função da ficha ----------------------------------------------------
function ficha(){
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
console.log("|####### FICHA DO ITEM  #######|") // escreve cada característica do item 
console.log("|------------------------------|")
console.log(`  ${status}                   `)
console.log(`  NOME: ${item[id][1]}           `)
console.log(`  PREÇO: R$ ${item[id][2]}       `)
console.log(`  RARIDADE: ${item[id][3]}       `)
console.log(`  ESTOQUE: ${item[id][4]}        `)
console.log("--------------------------------")
console.log(`                                 `)
// DESENHO DE FICHA DO ITEM COM VALORES DE CADA COLUNA DO ITEM ID 


let resposta = readlineSync.question('Digite qualquer coisa para volta: \n'); // CONTROLE PARA A PROXIMA PARTE
console.clear(); // LIMPA A TELA PARA DEIXAR MAIS LIMPO
}
//---------------------------------------------------------------------------------------------------------------------------

let id  // ID do item escolhido

//  npm install readline-sync --> instalar a biblioteca
const readlineSync = require('readline-sync'); // carrega a biblioteca dentro da const readlineSync

//--------------------------------------------------- Inicio --------------------------------------------------------------

let continua = true
while (continua){ //laço infinito para o sistema continuar

console.log("--------------------------------")
console.log("|#########  Bem vindo #########|")
console.log("|------------------------------|")

for (i = 0; i < item.length; i++) // RODA POR TODA A MATRIZ ATÉ CHEGAR NO UULTIMO ID
{console.log(` |${item[i][1]}| [${item[i][0]}]\n`)} // DIGITA O NOME DO ITEM ATUAL COM EMOJI

console.log("DIGITE: |Cadastrar| |comprar| |sair|")
console.log("Ou escolha o ID do item.")

id = readlineSync.question('\nR:'); // lê a resposta do usuário

switch (true){

    case id == "comprar": // se o usuario digitar comprar
    {
        console.clear(); // LIMPA A TELA PARA DEIXAR MAIS LIMPO
        Compra() // ativa a função de compra
        break;
    }
    case id == "cadastrar": // se o usuario digitar cadastrar
    {
            console.clear(); // LIMPA A TELA PARA DEIXAR MAIS LIMPO
            cadastro() // ativa a função de cadastrar
            break;
    }
    case Number(id) < item.length: // se o usuario digitar um ID de item válido 
        {
            console.clear(); // LIMPA A TELA PARA DEIXAR MAIS LIMPO
            ficha() // ativa a função de ficha do item
            break;
        }
        case id == "sair":
        {
            continua = false //caso digitar sair o while fica false e sai.
            break;
        }
     default:
}
        console.clear(); // LIMPA A TELA PARA DEIXAR MAIS LIMPO
     
}
