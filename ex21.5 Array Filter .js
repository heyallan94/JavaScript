
const numeros = [ 2 , 3 , 25 , 14 , 65 , 32 , 34 , 24 , 26 , 29 , 38 , 37 , 56]

const numerosPares = numeros.filter(function(par){
    return par % 2 === 0 //vai retornar tudo que for par para dentro do novo
})

console.log(numerosPares)

const calculos = [5.56569*5.3256 , 4*2.6899576 , 3.146987*4.6654488 , 3.565775*6.3335555 , 8*1.9988789 , 9.65475*4, 6.234795*2.358945, 3.56*7.65, 47/3]

const calculosAcimaDe20 = calculos.filter((item) => {
    return item >= 20
})

console.log(calculosAcimaDe20)

