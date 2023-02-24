/*
O continue é utilizado para que um loop pule ou faça determinada ação em uma parte do loop
Por exemplo, você pode pedir que conte de 1 a 100 e quando chegar no 10, ele não exiba o número*/


for(let n = 0; n <= 5; n++){
 
    if(n  == 3){
        console.log('O número 3 foi pulado')
        continue
    }

    console.log(n)
}

for(let impar = 0 ; impar <= 15 ; impar++){

    if(impar % 2 == 0){
        continue
    }

    console.log(impar)
}
