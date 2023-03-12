/*
Sabendo que objetos podem ter parametros
*/

let calculadora = {
    soma: function(a , b){
        return a + b
    },
    subtrair: function(a , b){
        return a - b
    },
    multiplicar: function(a , b){
        return a * b
    },
    dividir: function(a , b){
        return a / b
    }
}

let calculo15 = [calculadora.soma(1 , 5) , calculadora.subtrair(1,5) , calculadora.multiplicar(1,5) , calculadora.dividir(1,5)]

console.log(calculo15)