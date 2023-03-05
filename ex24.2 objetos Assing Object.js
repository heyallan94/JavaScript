let loja = {
    Aspirador: 390,
    Vassoura: 120,
    Detergente: 4
}

//Temos um objeto e queremos ADICIONAR sem mexer nas propriedades que existem

let loja2 = {
    Toalha : 12,
    Espelho : 349,
    Privada: 799,
    Aspirador: 400

}

console.log(loja)
Object.assign(loja, loja2) //Object.assign(Objeto que vai receber , objeto com propriedades novas)
console.log(loja) //Note que se houver uma mesma propriedade, ela é atualizada