/*O Map é o mesmo que o for(let item = 0; item < salarios.lenght; item++)
Ou seja, é um for mais rápido, o map irá ir de um em um item do array.

Criamos uma nova variável que vai receber: 
o mapa da variável salarios que executa a função, onde o contador se chama item
cada ver que o contador ir para um novo index ele vai retornar o valor do item atual multiplicado
por 2.

Dessa maneira, o map irá percorrer todo o array e irá automaticamente ser guardado
numa nova constante, que será o dobro*/

const salarios = [2 , 1800 , 1500 , 2000 , 3000]

const salariosDobro = salarios.map((item) => { //note que é boa prática já salvar a function
    return item == 2
})                                                 //sempre será oque se pede da function.
                                                   //interessante colocar o nome da const oque ela
console.log(salariosDobro)                         //representa

/*Mapeando OBJETOS*/

const familia = [{
    name: "John",
    salary: 1500,
    age : 19
},{
    name: "Winston",
    salary: 500,
    age : 17
},{
    name: "Bill",
    salary: 3540,
    age : 30
},{
    name: "Arthur",
    salary: 7102,
    age : 35
},{
    name: "Robin",
    salary: 2102,
    age : 27
},{
    name: "Will",
    salary: 850,
    age : 23
},{
    name: "Tim",
    salary: 1680,
    age : 22
}]

//Mostre em uma constante quem ganha mais que 1350

function goodsalary(array){
    return array.filter(elem => {return elem.salary >= 1350}).map(elem => {return elem.name})
}

const payers1350 = goodsalary(familia)

console.log(payers1350)

/* ================================ATENÇÃO
NÃO CONFUNDIR OBJETO COM ARRAY
AQUI ESTÁ FILTRANDO UM ARRAY COM OBJETOS
LEMBRAR QUE CADA OBJETO É UM ITEM DIFERENTE
*/