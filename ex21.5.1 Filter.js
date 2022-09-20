const a = {
    prop1: "casa",
    prop2: "parede",
    prop3: "degrau",
    prop4: "telhado",
    prop5: "cama",
    a : 15
}

const b = {
    prop5: "casa",
    prop4: "parede",
    prop3: "degrau",
    prop2: "telhado",
    prop1: "cama",
}

const keys = ['prop1' , 'prop2']//Aqui são os nomes que eu quero que retornem
const newUser = {} //Para criação do novo objeto, precisamos de um objeto novo para receber

function filtrando(item){//Criei essa função para receber algum array onde queira que os valores dentro do objeto, sejam jogados no objeto novo
    item.filter( key => { //atenção que esse key é o parametro do forEach
    return newUser[key] = a[key] //retorna para o objeto newUser[posição do parametro key] oque estiver na posição key do objeto A
})}

console.log(newUser)
filtrando(keys)
console.log(newUser)
