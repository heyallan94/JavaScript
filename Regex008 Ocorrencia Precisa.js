/*
Inserir o número de ocorrência entre {}
*/

const cep = /\d{5}-?\d{3}/ //Este é o padrão que você procura

console.log(cep.test(55501-252)) //Note que aqui o Valor vai dar 55249
console.log(cep.test('55501-252')) //Já aqui retorna TRUE pois não altera o número
console.log(cep.test('55501252'))

const tel = /\(?\d{2}\)?\d{1}.?\d{4}-?\d{4}/

console.log(tel.test('(81)9.9520-2535'))
console.log(tel.test('(81)99520-2535'))
console.log(tel.test('(81)995202535'))
console.log(tel.test('81995202535'))

const umOuDoisNumeros = /\d{1,2}/

console.log(umOuDoisNumeros.test('22'))
