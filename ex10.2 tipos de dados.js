/*Tipos de dados*/

/*
Number (Aritmético, Special Numbers)
+ soma
- subtração
/ divisão
* multiplicação
% resto
20 % 2  Significa que quer saber o resto de 20 dividido por 2
20 % 3 Nesse caso retorna 2, pois é o resto
*/

let a = 5
let b = 5 * 5
console.log(typeof(a))
console.log(typeof(b))
let x = Infinity //Isso é um número
let y = NaN // Isso é um número
console.log(typeof (y))


/*
String (Textos) */

let c = "casa"
console.log(typeof(c))
console.log("Usando o barra invertida +n \npula linha")
console.log(`${a} usando assim você pode executar JS nas chaves`)

/*
Boolean (Comparações, operadores lógicos) 
Usam true ou false
*/

let z = 3 > 4
console.log(z)
let zz = 3 < 4
console.log(zz)

/*Operadores lógicos
&& e
|| ou
! inverte os valores (true vira false)

*/
/*
Empty Values (null , undefined)

Duas palavras reservadas 
undefined e null
Sempre que você deparar
com essas palavras 
o JS basicamente diz que os
valores não existem


*/
