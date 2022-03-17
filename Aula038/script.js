function retornaFuncao(){
    const nome = 'Doctor Who';
    return function(){
        return nome;
    }
}
const funcao = retornaFuncao();
console.log(funcao);
console.dir(funcao);