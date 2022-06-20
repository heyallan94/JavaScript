let arr = [2 , 5 , 6 , 7 , 10 , 11 , 13 , 12 , 25 , 26 , 30 , 37 , 38 ]

for(let n = 0; n < arr.length; n++){
    let digite = 'par' //apenas 'impar' ou 'par'
    let atual = arr[n]

    if((atual % 2) == 0 && digite == 'par'){
        console.log(atual)
    }    
    
    else if((atual % 2) !== 0 && digite == 'impar'){
        console.log(atual)
    }
}