const nome = 'Doctor Who';
function falaNome(){
 //   const nome = 'Doctor Who nine'
    console.log(nome);
}
falaNome();
function usaFalaNome(){
    const nome = 'Doctor Who ten'
    falaNome();
}
usaFalaNome();