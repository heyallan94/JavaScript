
let n = "Rio de Janeiro" 

let pessoa = {
    nome: "Caio",
    idade: 23,
    cidade: [n],
    peso: "80kg",
    carro:() => {//ao ser colocado função dentro do objeto, será chamada de acordo
        console.log(5 + 5)
        console.log(`A Cidade é ${n}`)
    },
}

console.log(pessoa.carro) //Aqui mostra oque tem no dado carro.
pessoa.carro() //aqui chama a função, lembre-se de chamar pelo objeto.
console.log(pessoa.nome) // Olha a cor, ela muda de acordo com a propriedade

