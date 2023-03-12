/*
Normalmente métodos interagem com objetos
Podendo mudar os valores de propriedades do próprio objeto
*/

let person = {
    name: 'Jorge', 
    setName: function(newName){ //propriedade como função
        this.name = newName //this significa ESTE OBJETO AQUI, APENAS ESTE
    },                      //Preste atenção na lógica, o parametro newName altera o valor de name
    getName: function(n){
        return this.name //Se apenas invocar o person.getName() ele irá falar o nome do name atual
    }
}
console.log(person.getName()) //Nesse caso name = 'Jorge'
person.setName("Allan")
person.getName() //Aqui o valor de name foi alterado já
console.log(person.name,person.getName())