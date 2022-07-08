/*O Reduce é feito para REDUZIR todos os dados à apenas um dado. Por exemplo
num carrinho de compras, o usuário poderá saber qual o valor TOTAL do carrinho
Basta saber os valores*/

const carrinho = [1100 , 400 , 650 , 400 , 1000, 450 , 240 , 350]

const totalcarrinho = carrinho.reduce(function(valordoitem, valoracumulador){//Neste caso, o segundo parametro irá se acumular e será somado
    return valordoitem + valoracumulador                                     //ao valor do item ATUAL. Ou seja, vai iniciar em 1100 + 0
})                                                                           //então o acumulador irá para 1100. Então irá para segundo item
_                                                                            //que é 400. Acumulador (1100)  + 400 = 1500 Acumulador agora
console.log(totalcarrinho)                                                   //Assim até o final
