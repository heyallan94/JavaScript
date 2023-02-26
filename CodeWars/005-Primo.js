/*
Verifique se um número é primo, criando uma função que recebe o número como parametro
*/

let divisoes = 0

function primo(n){
    
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            divisoes++
        }
    }
    if(divisoes != 2){
        console.log(`${n} não é número primo`)
    }else{
        console.log(`${n} é um número primo`)
    }
}
console.log(divisoes)
primo(290)
console.log(divisoes)


