/**
 * Usamos esse método para a aplicação
 * dar uma 'respirada' no computador
 * do cliente.
 * 
 * Pois nem todas máquinas tem processamento
 * bom.
 */

let timeout;  //Isso é uma variável por instrução, ou seja, seu valor será passado depois

window.addEventListener('mousemove', function(e){
    clearTimeout(timeout); //Vai limpar o valor da variavel timeout
    timeout = setTimeout(function(){ 
        console.log(e.x)
    },500)
})