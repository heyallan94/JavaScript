/*
Podemos criar funções assincronas com a palavra async
Elas retornam uma promise
Se retornar algo, a promessa´e resolvida
se der alguma exception a promesse é rejeitada
*/

async function somar( a , b){
    return a + b
}

console.log(somar(5 , 5 ))