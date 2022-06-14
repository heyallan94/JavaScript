let a = [28 , 29, 27, 10 , 05 ]
let b = 1
for(b; b<= 4; b++){//a variavel b é o contador, enquanto variável b for menor igual a 4, vai fazer o bloco de ação e após isso o incremento que é variável b mais ele mesmo mais 1(b++)
    console.log(`O valor do elemento ${b} é ${a[b]}`)
}
a[5] = 69
console.log(a)
console.log(`Esse conjunto tem ${a.length} elementos.`)
console.log(a)
console.log(b)

let cade = a.indexOf(289)//pesquisar se existe o parametro desse valor '289'
if (cade ==-1){//Se não existir 289 dentro dos parametros, então vai retornar -1
    console.log('Não existe esse valor no comando!')
}else {
    console.log('Esse valor existe')
}

