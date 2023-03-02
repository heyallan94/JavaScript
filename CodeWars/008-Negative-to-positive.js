/*
Write a function with a negative parameter. It must return a positive parameter
*/

function positive(n){
    if(n < 0){
        console.log(Math.abs(n))
        return Math.abs(n)
    }else{
        console.log("Type a negative number")
    }
}

positive(-5)

