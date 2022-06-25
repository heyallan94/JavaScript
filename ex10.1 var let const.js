//Repare que o var, você altera mesmo depois de trabalhar dentro da função, note que o JS primeiro executa fora da função, após isso
//ele executa dentro da função, se a variavel for um var, ela será alterada para sempre

var a = 1

function bola(){
    a = 2
    console.log('var ' + a)
}

console.log('var ' + a)
bola()
console.log('var ' + a)


let b = 1

function bala(){
    b = 2
    console.log('let ' + b)
}

console.log('let ' + b)
bala()
console.log('let ' + b)

