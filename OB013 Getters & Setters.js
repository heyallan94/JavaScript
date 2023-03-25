/**
 * Servem para pegar informação de uma propriedade de objeto ou mudar ela
 * Se tem uma propriedade na class, então pode-se usar get ou set
 */

class Person{
    constructor(_name, _age){
        this.name = _name;
        this.age = _age
    };

    get getAge(){
        return this.age
    };

    set setAge(age){
        this.age = age
    }
}

let id1 = new Person('Allan' , 26)
console.log(id1.getAge)
id1.setAge = 27
console.log(id1)

/*================================IMPORTANTE
ESTRUTURA
class MinhaClasse { constructor(){};get getOquequero(){};set setOquequero(){}}
*/