/*
Prototype é um objeto de um objeto
Pai = Prototype
Filho = Objeto do Objeto

Um objeto fallback de outro objeto

Quando um objeto recebe uma requisição de propriedade
que não tem, ela procura no prototype(pai) desse objeto 
requerido

Prototype de um objedo criado do zero é o Object.
Object é o pai de todos
Todos objetos que criamos é um prototype
*/

let person = {
    foot : 2,
    legs : 2,
    run : function(run){
        return "He can't"
    }
}

//Objeto normal

console.log(Object.getPrototypeOf(person)) //Perceba que ele é filho do Object
console.log(person.hasOwnProperty('foot')) //Ele herda todos os métodos do pai
//Importante notar que, person.hasOwnProperty é um método que já é nativo. Mas herdou do pai Object

