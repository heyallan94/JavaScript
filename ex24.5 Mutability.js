/*
Ao atribuir um objeto à uma nova variável
A nova variável ao ser mudada irá mudar o objeto
principal
*/

let garagem = {carro : "Gol"}

let garagem2 = garagem //a nova variável recebe os dados do objeto

console.log(garagem)

garagem2.carro = "Bmw" // mudamos a nova variável, que por sua vez, altera AMBOS

console.log(garagem)

/* Quando atribuimos um objeto a outro, eles são por referencia */

