/*
O JSON significa Java Script Objeto Notation

Utilizado para comunicação entre Back e front

Basicamente um dado padronizado, lembra muito os 
objeto do javascript (pois Json não é exclusivo de JS)

Rigoroso na estrutura, não podendo fugir do padrão imposto

Apenas aspas duplas para texto

*/

let pessoa = {
    "nome" : "Allan",
    "idade" : 28,
    "Brasileiro" : true,
    "Familia" : [1 , 2 ,3, "casa" ]
}//AQUI é um objeto, mas o JSON vem assim

let pessoaJSON = JSON.stringify(pessoa) //De objeto para JSON
let pessoaObj = JSON.parse(pessoaJSON) // De JSON para objeto

console.log(pessoaObj)