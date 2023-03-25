function Person(_name, _age, _job){
    this.name = _name
    this.age = _age
    this.job = _job
}

let id1 = new Person('Allan' , 27 , 'Dev')
let id2 = new Person('Aylla', 7 , 'Ver anúncios no YT')

console.log(id1)

Person.prototype.permission = function (){ //Para criar uma "propriedade" na função
  if(this.age >17){
    return 'Maior de idade'
  }else{
    return 'Menor de idade'
  }
}

console.log(id2.permission())