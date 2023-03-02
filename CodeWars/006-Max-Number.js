/*
Write a function that returns a maximum random number. The maximum random number must be a
parameter.
*/

function random(n){
   return Math.floor(Math.random() * n) + 1
}
let under1431062464 = console.log(random(1431062464))
let under18 = console.log(random(190))
let under2 = console.log(random(2))

