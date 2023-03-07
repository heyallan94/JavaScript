/*
Esse método serve para você guardar numa variável os valores de propriedade de objetos
*/

let carros = {
    Gol : 28000,
    Tucson : 33000,
    Celta : 17000,
    Desconto : 25
}

let {Gol : carro1 , Tucson : carro2, Celta : carro3, Desconto: VinteCinco} = carros
//O nome da propriedade : Novo nome da variável

let exemploRuim = carros.Gol
let exemploRuim2 = carros.Tucson
let exemploRuim3 = carros.Celta
let exemploRuim4 = carros.Desconto
//Seria assim se fosse guardar o valor de cada propriedade

console.log(exemploRuim)