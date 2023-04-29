/*
Impede o carregamento de da página por exemplo, ou que algo
PADRÃO seja executado
Exemplo: Impedir que a tela desça ao clicar com a seta para
BAIXO do teclado.
*/

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
    }
  });
  

// Para impedir o carregamento de um link <a></a>
// Imagine que <a id="botão"></a>

let botao = window.document.getElementById('botao')
botao.addEventListener("click", function(event){
    event.preventDefault()
})
  
  
  
  
  