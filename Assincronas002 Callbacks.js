/*
Uma das vertentes da prog. Assíncrona é fazer ações que aconteçam
depois de um tempo por meio de callbacks.

Callback é uma função que faz uma ação após algum acontecimento
no código

Podemos realizar um callback com a função setTimeout
*/

setTimeout(function(){console.log('5')},2000) //Essa é o padrão
// ( função(){Oque a função faz}, OTempoEmMilissegundos)

setTimeout(function(){
    console.log('6')
},3000)



console.log('1')
console.log('2')
console.log('3')
console.log('4')