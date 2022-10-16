const myArray = [5 , "carro" , 3 , 5, {ei: "Lembre-se, objeto = item"}]

const elementIndex = myArray.findIndex(whatindex)

function whatindex(element){
    console.log(1)
}

console.log(elementIndex)

/*No caso acima. 
findeIndex vai percorrer todos os elementos
desse array, e executar função conforme ela

Na linha 9 irá dá -1, se o findindex não achar 
nada*/

const city = ["Los angeles", "Chicago" , "Shangai" , 10]
const mycity = ["Los angeles"]

function whichcity(array , cityNameArray){
   return array.findIndex(elem =>{ return elem == cityNameArray})
   
}

const whereLA = whichcity(city , mycity)

console.log(whereLA)