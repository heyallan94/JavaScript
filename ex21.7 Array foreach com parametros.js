/*O foreach tem algumas particulariedades
O primeiro parametro é o item atual que está no loop
O segundo parametro é o número do indice atual
O terceiro parametro é o array inteiro

Caso queira excluir um ou outro no console, LOGICAMENTE, é só pedir que o console
não imprima o dado
Note que não podemos salvar a nova lista feita pelo forEach, diferente do map que 
retorna um novo array*/

let pessoas = ['Ayrton', 'Cláudio', 'Mitchel', 'Darryl' , 'Barry']

pessoas.forEach(function(itemAtual, indice, arraycompleto){
    console.log(itemAtual, indice, arraycompleto)   //função normal
})

pessoas.forEach((itemAtual, indice, arraycompleto) => {
    console.log(itemAtual, indice, arraycompleto)   //função flecha
})