//Os objetos servem para armazenar dados em uma variável.
//Os arrays, são limitados, por exemplo, quando você quer saber um determinado dado você não precisa fazer arr[número].
//Simplesmente digita a variavel.ODadoQueQuerSaber

let n = "Rio de Janeiro" //defini uma variável antes para colocar dentro do objeto

let pessoa = { //inicia com chaves
    nome: "Caio", //ao digitar pessoa.nome, vai aparecer o dado "Caio"
    idade: 23, //Adcionando number
    cidade: [n], //adicionando variável
    peso: "80kg" //adicionando string
}

console.log(pessoa) //impromir todo o objeto
console.log(pessoa.nome) //imprimir um dado do objeto
console.log(pessoa.casa)// não existe um dado chamado casa no objeto, então dá undefined
//objetos são separados por vírgula, não esquecer