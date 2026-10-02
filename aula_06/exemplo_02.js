
const duplicados = ['Ana', 'Ana', 'ana' , 2, 3, 3];
const semDuplicados = [...new Set(duplicados)];

console.log(semDuplicados); // [1, 2, 3]