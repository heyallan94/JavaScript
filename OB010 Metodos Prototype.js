/**
 * Com o método de prototype, podemos já criar uma propriedade
 * 
 */

class Person{
    constructor(_age, _job){
        this.age = _age
        this.job = _job
    }
}

Person.prototype.country = 'Brasil'

let id1 = new Person (27 , 'Dev')
console.log(id1.country)