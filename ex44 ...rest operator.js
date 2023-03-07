/*
O Rest Operator é usado para indicar X argumentos.
Ele também pode ser usado para objetos ou arrays quando queremos copiar seu conteúdo.
Em alguns casos chamamos de SPREAD
*/

let n1 = 1
let n2 = 2
let n3 = 3
let n4 = 4
let n5 = 5
let n6 = 6

function restoperator(...args){
    console.log(args)
}

restoperator("Um número indefinido de parametros para função")
restoperator(1,2,3,4,5,6,7,8,9,10,n1,n2, Infinity, true, "texto")

//========================Agora para COPIAR sem referencia===============
let a = {casa:"azul",porta:"branca",climatizacao:false}
let b = {...a} //Copiado sem referencia

//Lembre-se, COM referencia altera todos os dados de todas variaveis referenciadas.
let c = [1 ,2 ,3]
let d = c //Copiado por referencia
d[1] = 5
console.log(c)
