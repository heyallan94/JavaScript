/*
O Método exec nos retorna um objeto com 
algumas informações sobre o regex

Se nada é encontrado ele retoran null
*/

const digitos = /\d+/

console.log(digitos.exec('4A56AS4A2S84E5W65SA'))
console.log(digitos.exec('A'))