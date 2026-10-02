
const usuarios = [
    { nome: 'Ana', ativo: true },
    { nome: 'Beto', ativo: false },
    { nome: 'Caio', ativo: true },
    { nome: 'Duda', ativo: false }
];

const users_ativos = usuarios.filter(n => n.ativo == true)

console.log(users_ativos)

