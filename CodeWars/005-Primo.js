/*
Verifique se um número é primo, criando uma função que recebe o número como parametro
*/



function primo(n){
    let divisoes = 0
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

primo(29)

