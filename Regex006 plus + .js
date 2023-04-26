/*
Quando um + está na expressão, este elemento pode se
repetir mais de uma vez
*/

let dSaoNumeros = /\d+/ 
//Ele vai aceitar o padrão que tiver números

console.log(
    dSaoNumeros.test(3),
    dSaoNumeros.test(2323232323),
    dSaoNumeros.test('550'),
    dSaoNumeros.test('550#!21abc'),
) //Todos retornam true, pois tem numeros dentro