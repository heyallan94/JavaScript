/*O Filter é basicamente um if, ele vai FILTRAR todos as keys que satisfazerem
oque o return pede*/
/*
const numeros = [ 2 , 3 , 25 , 14 , 65 , 32 , 34 , 24 , 26 , 29 , 38 , 37 , 56]

const numerosPares = numeros.filter(function(par){
    return par % 2 === 0 //vai retornar tudo que for par para dentro do novo
})

console.log(numerosPares)

const calculos = [5.56569*5.3256 , 4*2.6899576 , 3.146987*4.6654488 , 3.565775*6.3335555 , 8*1.9988789 , 9.65475*4, 6.234795*2.358945, 3.56*7.65, 47/3]

const calculosAcimaDe20 = calculos.filter((item) => {
    return item >= 20
})

console.log(calculosAcimaDe20)

*/

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
    item.forEach( key => { //atenção que esse key é o parametro do forEach
    return newUser[key] = a[key] //retorna para o objeto newUser[posição do parametro key] oque estiver na posição key do objeto A
})}

console.log(newUser)
filtrando(keys)
console.log(newUser)

/*
FILTER
*/

const prices = [{
    id : 211 ,
    price : 2500,
    tag : 'cellphone',
    description : 'A white cellphone'
},{
    id : 552 ,
    price : 15,
    tag : 'mouse',
    description : 'This is cheap mouse'
},{
    id : 243 ,
    price : 1445,
    tag : 'TV',
    description : '4k TV 20" '
},{
    id : 674 ,
    price : 375,
    tag : 'graphic card',
    description : 'gtx 760 2gb'
}]

const prices500mores = (prices.filter(anyNameYouWant => (anyNameYouWant.price > 500) ))


console.log(prices500mores)
