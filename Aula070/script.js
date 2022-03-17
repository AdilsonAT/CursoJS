
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('ERRO'); 
            return;
        }
        setTimeout(() => {
            resolve(msg + ' - Passei na promise');
            return;
        }, tempo);
    });
}
// promise.all
const promisesA = [
    'Primeiro valor', 
    esperaAi('PromiseAll 1', 3000),
    esperaAi('PromiseAll 2', 5000),
    esperaAi('PromiseAll 3', 1000),
 //   esperaAi(1000, 1000),
    'Outro valor'
];
Promise.all(promisesA)
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
})

// promise.race
const promisesR = [
    esperaAi('PromiseRace 1', 3000),
    esperaAi('PromiseRace 2', 5000),
    esperaAi('PromiseRace 3', 1000),
];
Promise.race(promisesR)
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
})

// Resolve Reject
function baixaPagina(){
    const emCache = true;
    if(emCache){
        return Promise.resolve('Pagina em cache.');
    }else{
        return esperaAi('Baixei a página', 3000);
    }
}
baixaPagina()
    .then(dadosPagina => {console.log(dadosPagina);})
    .catch(e => console.log(e));