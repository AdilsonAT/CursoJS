// Factory function
function criaPessoa(nome, sobrenome, a, p){
    return{
        nome,
        sobrenome,
        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        // Setter
        set nomeCompleto(valor){
            valor = valor.split('');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala: function(assunto){
            return `${this.nome} esta ${assunto}.`
        },
        altura: a,
        peso: p,
        imc(){  // outro modo de definir a function
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
        // Getter
        get imcG(){  // outro modo de definir a function
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
const p1 = criaPessoa('Rose', 'Tyler', 1.65, 50);
console.log(p1.nomeCompleto);
console.log(p1.fala('falando sobre js'), p1.imc());
console.log(p1.imcG);
p1.nomeCompleto = 'Doctor Who nine';
console.log(p1.nomeCompleto);