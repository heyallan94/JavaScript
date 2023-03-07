/*
O Split separa uma string de acordo com o parametro que você pedir e o joga num array
*/

let frase = "Um Lannister sempre paga suas dívidas"

let fraseArray = frase.split(" ") //entre "", colocar o separador

console.log(fraseArray)

let fraseArrayMeme = frase.split("a")

console.log(fraseArrayMeme)

/*
O join faz o inverso do split, pega um array e transforma numa string
*/

let fraseArrayJoin = fraseArray.join(" ") //O parametro que irá SEPARAR o array e juntar
console.log(fraseArrayJoin)