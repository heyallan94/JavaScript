/*
Finally é executada indepente do try/catch dando erro ou não
Pode existir com try e catch ou apenas try
*/

try {

    let a = 2 + b

} catch(e){

    console.log(e)

} finally {

    console.log('executou')
    
}