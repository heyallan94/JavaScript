/*O Map é o mesmo que o for(let item = 0; item < salarios.lenght; item++)
Ou seja, é um for mais rápido, o map irá ir de um em um item do array.

Criamos uma nova variável que vai receber: 
o mapa da variável salarios que executa a função, onde o contador se chama item
cada ver que o contador ir para um novo index ele vai retornar o valor do item atual multiplicado
por 2.

Dessa maneira, o map irá percorrer todo o array e irá automaticamente ser guardado
numa nova constante, que será o dobro*/

const salarios = [1200 , 1800 , 1500 , 2000 , 3000]

const salariosDobro = salarios.map((item) => { //note que é boa prática já salvar a function
    return item * 2
})                                                 //sempre será oque se pede da function.
                                                   //interessante colocar o nome da const oque ela
console.log(salariosDobro)                         //representa
