/*
Construtores são formas de instanciar uma classe em
uma linguagem de programação
Instanciar = criar um objeto novo
No construtor já podemos definir propriedades
*/
let ids = []

function makePerson(name , age , job){
    let person = Object.create({}) // Atenção ao modo de criação
    person.name = name //Já podemos definir as propriedades do objeto
    person.age = age
    person.job = job
    ids.push(person)
    return person //Manda a variável pra fora
}

let id1 = makePerson('John' , 27 , 'Dev')
let id2 = makePerson('Sam' , 28 , 'Dev')
let id3 = makePerson('Flint' , 28 , 'Medic')

console.log(ids)