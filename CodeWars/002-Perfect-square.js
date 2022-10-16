/*You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral 
perfect square after the one passed as a parameter. Recall that 
an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be 
returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*Without Math.sqrt()*
*/

let number = 1156
function findNextSquare(n){
    let numbers = [] // 1 , 3 , 5 , 7    
    let isSquare = 0
    let nextSquare = 0

    for(let i = 0; i <= n ; i++){
        if( i % 2 != 0){
            numbers.push(i)    
        }
    }

    for(let i = 0; i < n ; i++){
        if(isSquare < n){
            isSquare = numbers[i] + isSquare
        }
    }

    for(let i = 0; i < numbers.length; i++){
        nextSquare += numbers[i]        
        if(nextSquare > isSquare){
            break
        }
    }

    if( n != isSquare || n < 0){
        console.log(-1 , `, the next perfect square should be: ${nextSquare}`)
    }else if( n === isSquare){
        console.log(`The ${n} is a perfect square, the next Perfect square is:`,nextSquare)
    }
}

findNextSquare(number)

