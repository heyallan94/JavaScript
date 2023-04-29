/*
Podemos usar o stopPropagation()
para que um evento exlusivamente aconteça

Um exemplo SIMPLES disso é quando você quer clicar em um
botão que esteja DENTRO de uma DIV, que ao clicar essa
Div, aconteça outra coisa.

Exemplo
Clicou Div, = propagração1
Clicou botão Dentro Div = propagação1 + propagação2
Utilizando propagração, Clicou botão Dentro Div = propagação2
*/

function msg(e){
    e.stopPropagation()
}