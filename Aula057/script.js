function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a classe
        configurable: true, // configuravel
        get: function(){
            return estoque;
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('Mensagem');              
            }
            thiw.estoque = estoque;
        }
    });
}
const p1 = new Produto('Camiseta',  20, 30);
console.log(p1);
console.log(p1.estoque);

function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa.', '');
            nome = valor;
        }
    };
}
const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa.';
console.log(p2.nome);