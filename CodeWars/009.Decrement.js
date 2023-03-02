/*
Write a function that go from the parameter to 0 and console the even or odd numbers
*/

function decrement(evenOrOdd , number){
    if(evenOrOdd == "even" && number > 0){        
        if(number % 2 === 0){
            console.log(number)
        }
        number --
        return decrement("even" , number)

    }else if(evenOrOdd == "odd" && number > 0){
        if(number % 2 === 1){
            console.log(number)
        }
        number--
        return decrement("odd", number)
        }
}

decrement('odd' , 62)