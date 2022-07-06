//uma variável é variável, um array é uma variável com muitos elementos
let a = [] //cria um array sem INDEX ou sem KEYS

let b = [1, 2, 3] //Aqui array com INDEX (Não é parametros, não confunda)

let c = [5, 4, n = 0, 2, 1] //Aqui tem um index que é variável n, se não for preenchida a variável n, ela se torna 0. Se não tiver assim, o n será undefinied caso não tenha valor

console.log('Array b tem: ' + b)
a.push(30)//colocar um valor a ultimo index do array a
a.pop()//remover ultimo index
a.unshift()//adicionar um index ao primeiro array
a.shift()//remove o primeiro index
b.splice(1 , 0 , 1250) // o splica ADICIONA um elemento ao index. (IndexQueQueroColocarANTESOIndex, 0 = não remove o index seguinte, 1 = remove o index seguinta, número que quero adicionar(ou variável ou string etc.)
b.splice(1 , 0) //

console.log('Array b tem: ' + b)

console.log(Array.isArray(a)) //verificar se tal index é um array dentro de outro 

console.log(a)//mostrar todo o array a, que antes era a[], agora é a[30]

console.log(c)//repare que está fora de organização
c.sort()//colocar em ordem crescente
console.log(c)//agora está em ordem

console.log(c.length)//mostrar quantos index tem

let cade = a.indexOf(289)//pesquisar se existe o index desse valor '289'

a[0]= 'Era zero' //aqui o index 0 recebe essa string

console.log(a)// antes o valor era 30, agora virou 'Era zero'

let ultimoA = a[a.length -1] //Pegar o último array adcionado, note que precisa de uma váriavel para gravar tal dado

console.log(ultimoA) 

