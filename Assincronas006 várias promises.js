/*
Ao resolver várias promises, ao resolver a ÚLTIMA de forma assincrona
todos os dados das promises serão resolvidas.
*/

const p1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(15)
    }, 5000)
})

const p2 = Promise.resolve(10+5)

const p3 = new Promise(function (resolve, reject){
    resolve(12)
})

Promise.all([p1,p2,p3]).then(function(values){console.log(values)})

