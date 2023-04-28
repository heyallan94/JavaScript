/*
Funciona como um ||
*/

let carros = /\d+ (bmw|volkswagen|porsche)/

console.log(carros.test('5 bmw'))
console.log(carros.test('131 volkswagen'))
console.log(carros.test('902 porsche'))
