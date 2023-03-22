/*
Quando estamos falando de orientação à objetos 
Não falamos "vamos criar um objeto de um objeto"
Falamos "vamos criar uma classe desse objeto"

Todo objeto é uma classe

Em outras linguagens uma Class é um molde de um objeto

Ou seja, podemos criar diversos objetos em cima de
um prototype
*/

let nacionality = {
    name : function(name){
        if(name === undefined){
            return console.log("Error! Set nacionality.name(name)!")
        }
        return this.name = name
    },
    country : function(name){
        if(name === undefined){
            return console.log("Error! Set nacionality.country(name)!")
        }
        return this.country = name
    },
    job : function(name){
        if(name === undefined){
            return console.log("Error! Set nacionality.job(name)!")
        }
        return this.job = name
    }
}

let brazil = Object.create(nacionality)
brazil.job = "pedreiro"
console.log(brazil)

