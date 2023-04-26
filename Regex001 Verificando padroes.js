/*
Após definir o padrão regex
Utilizamos o método test() para verificar se o padrão é retornado
Com isso vamos receber true ou false
*/

let padrao1 = /testando/

console.log(padrao1.test('ttttttttestandooooo'))

let padrao2 = /bola/

console.log(padrao2.test('A bola é o principal do futebol.'))
console.log(padrao2.test('Uma BoLa é sempre redonda')) //tem diferença de maiusculo e minusculo

let padrao3 = 'Ball means "bola" in portuguese'

console.log(padrao2.test(padrao3)) 
//Primeiro passa oque você quer como padrão
//Segundo onde você quer procurar