/**
 * Symbol são constantes de um objeto
 * É identico ao const, ele nunca vai alterar o valor
 * É para objetos
 * Só pode aparecer uma vez
 */

class Person{
    constructor(_name, _age){
        this.name = _name;
        this.age = _age
    }
}

const country = Symbol()

Person.prototype[country] = 'Brasil' //Agora terá uma propriedade permanente nessa class

let id1 = new Person ('Allan' , 27)
console.log(id1)