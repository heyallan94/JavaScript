const texto = "Javascript isn't java"
const texto1 = texto.substring(0 , 14) //substring(numero inicial, até onde vai cortar *número final*)
console.log(texto1) //note que a variavel nova é o corte feito

const texto2 = texto.substring(15 , texto.length) //nesse caso usei o numero inicial + até o ultimo length dessa
console.log(texto2)                               //string

let n = 15
let j = 30
const texto3 = 'This is a big and a expensive house'
const texto4 = texto3.substring( n , j)
console.log(texto4)