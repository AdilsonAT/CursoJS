const pessoas = [
    {id: 3, nome: 'Doctor Who'},
    {id: 2, nome: 'Rose Tyler'},
    {id: 1, nome: 'Romana'},
];

for (const {id, nome} of pessoas){
    console.log(id, nome);
}

const novasPessoasA = {};
for (const pessoaA of pessoas){
    const {id} = pessoaA;
    novasPessoasA[id] = {...pessoaA};
};
console.log(novasPessoasA);

const novasPessoas = new Map();
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa})
};
console.log(novasPessoas);
for (const pessoas of novasPessoas.values()){
    console.log(pessoas);
}