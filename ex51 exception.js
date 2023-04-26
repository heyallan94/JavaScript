/*
Podemos criar erros no programa, caso alguma condição
não seja atendida

As exceptions abortam o programa ao gerarem o erro.
*/

function saudacao(nome){
    if(typeof nome != 'string'){
        throw new Error('O parametro deve ser uma string.')
    }else{
        console.log(`Olá ${nome}, bem-vindo.`)
    }
}

saudacao(1)
