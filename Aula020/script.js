/*
&&
||

FALSY
false
0
'' "" ``
null undefined
NaN
*/

function falaOi(){
    return 'Oi';
}

const vaiExecutar = false;
console.log(vaiExecutar && falaOi());
vaiExecutar && console.log(falaOi());

console.log(0 || false || null || 'Doctor Who' || true)