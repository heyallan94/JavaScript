/*
Podemos definir um conjunto de caracteres para encontrar por regex
Basta por entre []
Com um traço podemos definir um intervalo também.
*/

const padrao1 = /[12345]/

console.log(padrao1.test(6))//false
console.log(padrao1.test(3))//true
console.log(padrao1.test('23'))//true também, pois 23 existe no meio de 12345
console.log(padrao1.test(27))
console.log(padrao1.test(617))//basta um numero para dizer que é true

/*Cuidado que regex assim dá muita complicação*/

const padrao2 = /[0-9]/ //Essa expressão diz que qualquer número de 0 a 9 retorna tur
//Não necessariamente DE ZERO ATÉ NOVE, MAS Se tiver um número
//entre 0 e 9, retorna TRUE
//Ou seja, todos números
