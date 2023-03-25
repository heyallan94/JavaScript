/*
Nesse caso, podemos deixar já padronizado a class e o valor será alterado 
conforme os parametros passados
*/

class Person {
    constructor(_name, _age){
        this.name = _name
        this.age = _age
    }
}

Person.prototype.name = 'Sem nome definido'
Person.prototype.age = 'Sem idade definida'

let id1 = new Person ('Allan' , 27 )
console.log(Person.prototype.age) //Aqui já está padronizado esse valor
console.log(id1.age)