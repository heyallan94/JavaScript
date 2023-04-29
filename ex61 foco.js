/*
Quando focamos em um elemento ou saimos dele
podemos fazer eventos

Focus para quando um elemendo recebe foco
e blur quando clica fora dele
*/

let input = document.getElementById('input')
input.addEventListener('focus', function(){
    console.log('Ao clicar vai chamar')
})

input.addEventListener('blur', function(){
    console.log('Ao sair ele chama')
})