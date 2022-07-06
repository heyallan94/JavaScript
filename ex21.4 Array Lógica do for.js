//Este exercício é para observar que a variável soma, tem seu valor alterado ao final do for
//e também a variável const não tem seu valor alterado

let arr = [1 , 2 , 3 , 4]
const aloha = 0
let soma = aloha
console.log('Antes for ' +soma)
for(let i = 0; i < arr.length; i++){
    soma = soma + arr[i]
    console.log(i+ 'valor de i ' + i)
    console.log(i+ 'valor de soma ' + soma)
    console.log(i+ 'valor de arr[i] ' + arr[i])
}

console.log('Após for '  + soma)
console.log('Após for '  + aloha)

//Usando mais lógica para multiplicar dados de um array por 2
const usuariosIdade = [13 , 15 , 17 , 18];
const usuariosIdadeMultiplicadoPorDois = usuariosIdade
console.log('Antes do for ',usuariosIdadeMultiplicadoPorDois)

for(let i = 0; i < usuariosIdade.length; i++) {
    usuariosIdadeMultiplicadoPorDois[i] = usuariosIdadeMultiplicadoPorDois[i] * 2
}

console.log('Depois do for ' , usuariosIdadeMultiplicadoPorDois)