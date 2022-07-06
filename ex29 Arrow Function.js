/* 
 Arrow function precisa de uma variável para guardar tal função, porém uma função normal também
 pode ser guardada dentro de uma variável
 */

let multiplicar = function carro(){
    return 3 * 5
} //função normal

let soma = () => {
    return "Retornou o conteúdo da função"
} //arrow function

console.log(soma) //quando chama a variável, aparece que dentro tem uma função
console.log("Linha 15: " + soma()) //ao executarmos a função, ele executa a função e retorna
console.log("Linha 16: " + multiplicar()) // mesma coisa, retorna o valor da função

console.log("--------------------------")
/* Podemos usar o arrow function sem o return também
mas é coisa bem simples*/

let adicao = (m1 , m2) => m1 * m2 //isso é o mesmo
console.log(adicao(3 , 9))// Lembre de chamar os parâmetro

let comunidade = () => 'Vila Jhinno' /*Usar uma função anonima, sem parametros*/
console.log(comunidade())/*Ao chamar, não precisa de parametro*/

let double = (numeroDouble) => numeroDouble * 2/*A FUNÇÃO DOUBLE de parametro numeroDouble executa numeroDouble * 2*/
console.log(double(25))//Sempre ao chamar a função

console.log("-----------------------------------")

/*Aqui o básico do básico, ao chamar a função, ela executa tudo dentro
nesses dois casos, ambos devem aparecer o valor de a, que é uma constante.
Porém, constantes não podem ser alteradas
Então você pode CRIAR elas dentro da function que vai ficar no escopo da function*/
function init() { 
    const a = 20
    console.log(a)
}
init()

function caro() {
    const a = 23
    console.log(a)
}
caro()
