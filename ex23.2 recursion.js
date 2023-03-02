/*
Funções Recursivas, chamam a si própria até chega no resultado
*/

function ateZero(n){

    if(n === 0 ){
        return console.log("Finalizou em 0")
    }else if( n > 0){
        console.log(`${n}`)
        return ateZero(n - 1)
    }
}

ateZero(10)

/* É tão útil quanto o for */