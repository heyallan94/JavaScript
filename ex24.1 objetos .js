const atores = {
    segunda : 'Maria',
    terca : 'Jorge',
    quarta : 'Jessyca',
    quinta : 'Douglas'
}

console.log(atores) //objeto inteiro
console.log(atores.segunda) //propriedade segunda do objeto atores
console.log(Object.keys(atores)[0]) //nome da propriedade
console.log(Object.values(atores)[0])//valor da propriedade
console.log(Object.keys(atores).length) //quantas propriedades tem esse objeto

/*================ IMPORTANTE ================
Ao utilizar o Object.keys/values/entries, ele CRIA um ARRAY com os dados do que você pede e joga como
indexs no array*/

const atoresArrayDia = Object.keys(atores) //Aqui estou puxando a propriedade do objeto e fazendo um array
console.log(atoresArrayDia)

const atoresArrayNome = Object.values(atores) //Mesma coisa, agora puxando o valor da propriedade pra um array

const atoresArrayTudo = Object.entries(atores) //Aqui pega cada linha do objeto e joga em array de array

console.log("Linha 23", atoresArrayTudo)  //Note que aqui, cada linha é um index, para acessar um dado na Linha 3, nome 2
                                          //Iremos fazer :
console.log("Linha 27" , atoresArrayTudo[2][1])