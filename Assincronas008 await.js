/*  
Nas async functions
podemos determinar uma instrução
await

Que por sua vez, vai esperar
uma promise ser resolvida
para apresentar os dados

 */

function somaComDelay( a , b) {
    return new Promise(resolve =>{ //Lembre de retornar a promessa, pois até o momento é apenas uma function normal
        setTimeout(function(){ //Após um tempo vai executar
            resolve(a + b) //Surgiu a dúvida, oque acontece se colocar return aqui? 
        }, 3500)           //O dado simplesmente é perdido, pois ele retorna imediatamente e não espera o timeout
    })
}

async function resSoma( a , b , c){
    let x = somaComDelay( a , b) // O resultado da função
    let y = c

    return await x + y
}