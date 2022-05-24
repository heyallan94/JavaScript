//Exercício com as primeiras condições aninhadas
let idade = 20 
console.log(`Você tem ${idade} anos, portanto`)
if (idade <16) {
    console.log('Não tem idade para votar')
} else if(idade >=18 && idade <=65){
    console.log('seu voto é obrigatório.')}
else
    console.log('seu voto é opcional')
