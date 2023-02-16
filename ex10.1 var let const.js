//Repare que o var, você altera mesmo depois 
//de trabalhar dentro da função, note que o 
//JS primeiro executa fora da função, após isso
//ele executa dentro da função, se a variavel 
//for um var, ela será alterada para sempre


var a = 1 /*var já é mal uso, não use, ele perde confiabilidade
no gráfico*/

function bola(){
    a = 2
    console.log('var ' + a)
}

console.log('var ' + a)
bola()
console.log('var ' + a)


let b = 1 /*O let ajuda no escopo, ele mantem o valor de
b = 1 no escopo global
na função ele será modificado APENAS DENTRO DA FUNÇÃO 
e retorna ao valor global*/

function bala(){
    b = 2
    console.log('let ' + b)
}

console.log('let ' + b)
bala()
console.log('let ' + b)

const c = 18 /* No caso de const ele NUNCA muda no código inteiro */


