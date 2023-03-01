/*
No Js, é possível passar funções de parametros sem TODOS os parametros.
Porém em alguns casos não
Exemplo do Typescript
*/

function abc(a , b , c){
    if(a > b && a > c){
        return console.log(`O maior número é ${a}`)
    }else if( b > a && b > c){
        return console.log(`O maior número é ${b}`)
    }else if(a === undefined || b === undefined || c === undefined){
        return console.log(`Faltando parametro`)
    }else{
        return console.log(`O maior número é ${c}`)
}
}

abc( 15 , 1 , 12) //3 parametros, OK
abc( 25 , 50) // ele retorna undefined, mas ainda aceita. Porém fiz o tratamento de dados com um if
abc(1 , 2 , 3 ,4 , 5 ) //Além dos parametros, ele vai funcionar até o número que a função pede

console.log('--------------------------------------')

/* O Default nada mais é que um parametro que já é pre estabelecido pelo JS ou pelo dev */

function def(d = 3 , e , f){
    console.log(d)
}
def() //O  default é 3
def(5) // O default é substituido por 5