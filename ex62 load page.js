/*
Podemos atrelar um evento quando a página carrega
pelo evento load.

E antes do usuário sair da página usamos
beforeunload
*/

window.addEventListener('load',function(){
    alert('Ao carregar a página aparcerá isso')
})

window.addEventListener('beforeunload', function(e){
    e.returnValue = null
})
