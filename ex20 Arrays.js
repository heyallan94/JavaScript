let a = [5 , 2 , 3 , 4 , 6] // lembre que o 0 conta, ai tem 5 elementos, mas vai apenas até o array a[4], o a[5], não existe
console.log(a[1]) //pedir para mostrar uma chave do array A
console.log(a.length)//saber quantos elementos tem no array a
a[5] = 10//adcionar a chave 5, o número 10
console.log(a)//imprime na tela todo o array
a[6] = 'casa'
console.log(a[6])
a.push('piscina')//adicionar a ultima chave, isso é boa prática
console.log(a[7])
a[7] = 'toalha' // isso é má prática
console.log(a)
a[0] = 'falouras'
console.log(a)
a.sort()
console.log(a)
a[8] = 10
console.log(a)
a.push(20)
console.log(a)
let ultimoA = a[a.length -1] //Pegar o último array adcionado
console.log(Number(a[2]) + ultimoA)