/*
Estamos prometendo pro código que em um ponto futuro
algo vai chegar

São ações assíncronas que indica "hey js, vai chegar uma coisa daqui a pouco"

O objeto das promises se chama PROMISE
resolve() é oque resolve uma Promise
then é oque faz ela ser executada no futuro
*/

let p = Promise.resolve(5)

console.log('Outros códigos')
console.log(p)

p.then((value) => { return value + 5 }) //Eu posso colocar quantos .then quiser
.then((value) =>{console.log(value)}) //Note que você deve retornar o valor caso queira usar
.then((value)=>{console.log(value + 5)})//Aqui deu NaN porque oque retornou foi um console.log(value)

