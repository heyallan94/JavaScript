/*
Quando criamos um objeto a partir de outro, a base será
o prototype

Ele herdará tanto os métodos e propriedades de Object
Pois o Object é o Pai do objeto que está servindo de pai
Object = pessoa{ filho {}}
Filho herda tudo de Object, pois pessoa que é pai de filho
herdou tudo de Object


*/

let person = {
    foot : 2,
    legs : 2,
    run : function(run){
        return "He can't"
    }
}

let kid = Object.create(person) //kid é um objeto criado de person
console.log(kid.foot) //Ele herdou todas propriedades do prototype
