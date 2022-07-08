/*Um objeto, uma variável que tem o {}, pode receber várias propriedades.
Para ACESSAR uma propriedade, é necessário digitar o nome do objeto

*/

let itens = [{},{},{},{}]// Repare aqui como que é um array de objetos
                         //cada objeto contém suas propriedades


let descontoGeral = 15
let dis = (100 - descontoGeral)/100

let catalogo = [{
    id: 244457,
    nome: "Celular Iphone 13 MAX",
    preço: 7400,
    desconto: 7400*dis
},{
    id: 665575,
    nome: "iMAC notebook 17' ",
    preço: 8500,
    desconto: 8500*dis 
},{
    id: 221114,
    nome: "Samsung Galaxy S25",
    preço: 2500,
    desconto: 2500*dis
}
]

catalogo.forEach((atual)=>{             //Atenção aqui, ao mostrar propriedade de objetos
    console.log(atual.desconto)         //o forEach não é salvo em variável, ela não é retornada
})                                      //em array novo. Objeto.forEach((parametrodoseunome)=>{
//                                      //      console.log(parametrodoseunome.propriedadequequer)})

