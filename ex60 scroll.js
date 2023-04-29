/*
Ao utilizar o rolamento da página, também temos um dados
Para esse dado fazer algo usaremos o 'scroll'
*/


window.addEventListener('scroll', function(e){
    if(this.window.scrollY > 1000){
        console.log('ativou')
    }
})