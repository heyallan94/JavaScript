/**
 * Em muitas linguagens temos a possibilidade de instanciar
 * um objeto com new, no JS também
 * 
 */

function Person(name){ //Classes necessitam primeira letra MAIÚSCULA
    this.name = name
}

let first = new Person('first')

console.log(first)

//=================================================

let ids = []

function Register(name, age, city, job , wage, married = false){
    this.name = name
    this.age = age
    this.city = city
    this.job = job
    this.wage = wage
    this.married = married
    this.work = function(){
        return 'Can work'
    }

}

let John = new Register('John' , 35 , 'Orlando' , 'Medic' , 385000 , 'married')
console.log(John.work())
