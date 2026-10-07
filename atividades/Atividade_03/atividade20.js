
const bonus = (salario) => {
       let gasto_total = 0

    for (list_salari of salario)
    {list_salari < 2000 ? gasto_total += list_salari*1.1 : gasto_total += list_salari;}
    
    return gasto_total
}

console.log("o gasto total da empresa é:", bonus([2000,1800,3000]))