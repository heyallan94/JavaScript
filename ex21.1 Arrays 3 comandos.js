//uma variável é variável, um array está na mesma variável
let a = [] //cria um array sem parametros

let b = [1, 2, 3] //Aqui array com parametros

let c = [5, 4, n = 0, 2, 1] //Aqui tem um parametro que é variável n, se não for preenchida a variável n, ela se torna 0. Se não tiver assim, o n será undefinied caso não tenha valor

a.push(30)//colocar um valor a ultimo parametro do array a

console.log(a)//mostrar todo o array a, que antes era a[], agora é a[30]

console.log(c)//repare que está fora de organização
c.sort()//colocar em ordem crescente
console.log(c)//agora está em ordem

console.log(c.length)//mostrar quantos parametros tem

let cade = a.indexOf(289)//pesquisar se existe o parametro desse valor '289'

a[0]= 'Era zero' //aqui o parametro 0 recebe essa string

console.log(a)// antes o valor era 30, agora virou 'Era zero'

let ultimoA = a[a.length -1] //Pegar o último array adcionado, note que precisa de uma váriavel para gravar tal dado

console.log(ultimoA) 

