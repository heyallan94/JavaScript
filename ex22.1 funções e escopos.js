/*
O escopo de dentro da função é diferente do global
*/

let n = 10 //Note que ambas estão no global
let j = 20 

function abc(){
    let n = "dentro função" //esse let n só existe nessa função
    console.log(n) // vai mostrar esse n aqui de dentro, senão existisse aqui, mostraria o do global
    j = j + 15 //Já essa aqui altera a variável do global
}

abc() //Ao executar mostrará de acordo
console.log(n)//Aqui é a variável global
console.log(j)//Também é global aqui

/*
Note que CONST não seria possível, pois na linha 11, você está alterando o valor da variável, e isso não é aceitavel no const.
Começou const, vai ser aquele valor até o final

*/
