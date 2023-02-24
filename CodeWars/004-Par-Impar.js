/*
Escreva um loop que o contador inicie em 0 vá até 50 e diferencie par de ímpar no console log
e jogue cada um deles em arrays separados
*/

let par = []
let impar = []

for(let n = 0; n <= 50 ; n++){
    if(n % 2 == 0 && n != 0){
        console.log(`${n} é par e foi atribuído ao array ímpar.`)
        par.push(n)
    }else if (n != 0){
        console.log(`${n} é ímpar e foi atribuído ao array ímpar.`)
        impar.push(n)
    }
}

console.log(par)
console.log(impar)