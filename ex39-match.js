/*Usamos o match para verificar se
alguma condição acontece numa string
e retorna
*/

let mystring = "is2 Thi1s T4est 3a"
let regex = /\d/g

let teste = mystring.match(regex)

console.log(teste)

/*Nesse exemplo, tudo que for d = dígito
deverá retornar nessa variavel, chamada teste*/

let mystring2 = "Hello, today is 09/30/2022"
let onlyVowels = mystring2.match(/\w+/g)
console.log(onlyVowels)