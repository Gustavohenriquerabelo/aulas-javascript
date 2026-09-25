
export function saudacao(nome = 'Visitante') {
  console.log(`Olá, ${nome}`);
}

export const dobro = n => n * 2

export function formatar_moeda(valor)
{
        return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}

export function valida_email(email)
{
    return email.includes("@",".")
}

export function data_formatada()
{
    const data = new Date();

    let dia = data.getDate()
    let mes = data.getMonth()
    let ano = data.getFullYear()

    return `${dia+1}/${mes+1}/${ano+1}`
}

console.log(data_formatada());
