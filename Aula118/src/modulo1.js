/*
const nome = 'Doctor Who';
const sobrenome = 'Nine';
const idade = 30;

function soma(x,y){
    return x+y;
}

export {nome, sobrenome, idade as idadeE, soma};
*/

export const nome = 'Doctor Who';
export const sobrenome = 'Nine';
export const idade = 30;
const cpf = 12345678901;

export function soma(x,y){
    return x+y;
}

export class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}