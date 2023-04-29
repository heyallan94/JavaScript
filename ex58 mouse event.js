/**
 * No mouse também temos eventos como mousedown e mouseup
 *
 * Aqui estão alguns dos eventos de mouse mais comuns:

    click: acionado quando o botão esquerdo do mouse é clicado (ou quando a tecla Enter é pressionada enquanto um elemento está focado).
    dblclick: acionado quando o botão esquerdo do mouse é clicado duas vezes rapidamente.
    mousedown: acionado quando o botão do mouse é pressionado.
    mouseup: acionado quando o botão do mouse é liberado.
    mousemove: acionado quando o mouse é movido.
    mouseenter: acionado quando o mouse entra na área de um elemento.
    mouseleave: acionado quando o mouse sai da área de um elemento.
    mouseover: acionado quando o mouse passa por cima de um elemento ou de um dos seus filhos.
    mouseout: acionado quando o mouse deixa a área de um elemento ou de um dos seus filhos.
    contextmenu: acionado quando o botão direito do mouse é clicado.
 */

btn = document.querySelector("button")

btn.addEventListener("dblclick", function(){
    console.log('Ativou com double click')
})

/*
Ao utiliar o botão direito, cuidado, a função muda
*/

btnDireito.addEventListener('contextmenu', function(e){
    e.preventDefault(); //Para impedir que mostre menu
    console.log('Botão direito')
})