/*
Sempre que uma tecla é pressionada são gerados dois eventos

Ao pressionar 
keydown

ao soltar
keyup

Logo podemos usar os eventos para interagir com aplicação
*/

window.addEventListener('keydown' , function(e){
    if(e.key == 'v'){
        console.log('Apertou a tecla v')
    }
})

/**
 * Não há uma lista completa de todas 
 * as possíveis strings de event.key, pois as 
 * strings de key podem variar dependendo do 
 * layout do teclado e do navegador utilizado.
 * No entanto, aqui estão algumas das strings 
 * de key mais comuns para as teclas alfanuméricas:

"a"
"b"
"c"
"d"
"e"
"f"
"g"
"h"
"i"
"j"
"k"
"l"
"m"
"n"
"o"
"p"
"q"
"r"
"s"
"t"
"u"
"v"
"w"
"x"
"y"
"z"
"0"
"1"
"2"
"3"
"4"
"5"
"6"
"7"
"8"
"9"

Aqui estão algumas strings de key 
comuns para as teclas de controle:

"ArrowDown"
"ArrowLeft"
"ArrowRight"
"ArrowUp"
"Backspace"
"Delete"
"End"
"Enter"
"Escape"
"Home"
"Insert"
"PageDown"
"PageUp"
"Tab"
"CapsLock"
"Control"
"Alt"
"Shift"
"Meta"
 */


