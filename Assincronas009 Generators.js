/*
Os generators são uma função que sempre incrementa uma variável
TODA VEZ QUE É CHAMADA
*/

function* criadorID(){
    let id = 0
    while(true){
        yield id++
    }
}

let criadID = criadorID()

console.log(criadID.next().value)