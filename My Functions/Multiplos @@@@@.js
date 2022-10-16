/*
This function returns multiple of a number 
emptyarray : put the array where the numbers will fill
highnumber : the highest number 
multiple : the number you want multiples from
*/


function multiplos(emptyarray , highnumber , multiple) {    
    for(let i = 0 ; i < highnumber ; i++){
        if(i != 0){emptyarray.push(i)}
    }
    return emptyarray.filter((elem) => {return elem % multiple === 0})
    
        
}  

let arraym = []
multiplos(arraym , 100 , 5 )
console.log(arraym)

/*
function def(x){
   x.push(3)
   return x.push(1)
   x[1] = null
}
let abc = []
def(abc)
console.log(abc)*/
