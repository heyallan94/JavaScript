/*
Outros métodos de como usar regex
*/

let ano = /\d\d\d\d/

console.log(ano.test(2034))

let quatroLetras = /\w\w\w\w/

console.log(quatroLetras.test('abc'))

/*
O Regex somente procura o padrão dentro do dado
Se houver o padrão, não importando onde, ele vai aceitar
e retornar true
*/