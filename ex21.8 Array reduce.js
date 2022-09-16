/*O Reduce é feito para REDUZIR todos os dados à apenas um dado. Por exemplo
num carrinho de compras, o usuário poderá saber qual o valor TOTAL do carrinho
Basta saber os valores*/

const carrinho = [1100 , 400 , 650 , 400 , 1000, 450 , 240 , 350]

const totalcarrinho = carrinho.reduce(function(valoranterior, valoracumulador){//Neste caso, o segundo parametro irá se acumular e será somado
    return valoranterior + valoracumulador                                     //ao valor do item ATUAL. Ou seja, vai iniciar em 1100 + 0
})                                                                           //então o acumulador irá para 1100. Então irá para segundo item
                                                                             //que é 400. Acumulador (1100)  + 400 = 1500 Acumulador agora
console.log(totalcarrinho)                                                   //Assim até o final

//========================================================================================
//Reduce
//========================================================================================

/*Para array de objetos:*/

const cars = [{
    Marca: "Audi", Valor: 120000, Valor: 50000},
    {Marca:"Chevrolet", Valor: 80000,},
    {Marca: "Fiat", Valor: 30000,},
    {Marca: "Porsche", Valor: 250000,},
    {Marca: "Mustang", Valor: 380000,},
    {Marca: "Toyota", Valor: 90000,},
]

const carsValue = cars.reduce((itemAnterior , itemAtual)=> itemAnterior + itemAtual.Valor , 0 )

console.log(carsValue)

/*Lembre-se que nesse caso, o reduce está indo em cada objeto e pegando o valor ATUAL da propriedade 
chamada VALOR de CADA objeto.*/



