const user1 = {
    id: 1,
    name: 'John Smith',
    password: '123456789'
}

const user2 = {
    name: 'William Mason',
    senha: '987654321',
    id: 2,
}

//Neste exemplo, vamos fazer o objeto virar uma função, dessa forma podemos ordenar mais fácil
//

function objectToArray(a){
const keys = Object.keys(a)//Aqui todas propriedades viram index do array, ATENÇÃO PROPRIEDADES não VALORES
return keys
}

const array = objectToArray(user1)

console.log(array)
