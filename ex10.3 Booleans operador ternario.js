/*
Faz um comparativo em apenas uma linha
console.log(true ? 1 : 2)
console.log( false ? 'falso' : 'verdadeiro')
Não é muito utilizado e pode deixar o código complicado de ler*/

let a = 1
let b = 2

console.log(a > b ? 'Verdade' : 'Mentira' )
//Comparação + ? Pergunta + 'reposta se for true' : 'resposta se for false')

if( a > b){
    console.log('Verdade do id')
}else{
    console.log('Mentira do if')
}
let n = 5
let nt = "5"
console.log(n == nt ? 'Igual' : 'Não é igual')
console.log(n === nt ? 'Idêntico' : 'Não é idêntico')
