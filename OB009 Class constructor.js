/**
 * O class veio para substituir o function ao criar Objetos/class
 */

class Person {
    constructor(_name, _job , _wage){
        this.name = _name,
        this.job = _job,
        this.wage = _wage
    }
} //Atenção à estrutura
//class Person { constructor(parametros){oque quero}}

let id1 = new Person ('Allan' , 'Programador' , '6500')
