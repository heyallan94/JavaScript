/**
 * Faz com que o digito anterior seja opcional
 * 
 */

const padrao = /Laran?ja/ 
//Significa que o n é opcional

console.log(padrao.test('Laraja'))
console.log(padrao.test('Laranja'))
console.log(padrao.test('Laramja')) //Note que aqui já quebra o padrão

console.log(padrao.test('Laraja se pronuncia Laranja'))