const vingadores = [{
    nome: 'Tony',
    sobrenome : 'Stark',
    fortuna : '24.000.000.000,00 U$D',
    codinome : 'Homem de ferro',
    esposa : true,
},{
    nome: 'Thor',
    sobrenome : null,
    fortuna : null,
    codinome : 'Deus do Trovão',
    esposa : true,
},{
    nome: 'Bruce',
    sobrenome : 'Banner',
    fortuna : '14.000,00 U$D',
    codinome : 'Hulk',
    esposa : null,
},]

let registro = vingadores.map(qualquernome => qualquernome.nome) //Note que aqui ele criou a variável let e o map 
console.log(registro)                                            //fez a nova lista com as propriedades que pediu!

//Com o objeto FEITO, Deve-se transformar em JSON. Mas lembre-se que JSON aceita apenas texto
//então TUDO TUDO deve está dentro e "" e no final não pode finalizar com virgulas como é o caso de objetos que 
//podemos

console.log(typeof vingadores) //Aqui é um objeto

const jsonvingadores = JSON.stringify(vingadores) //Transformando em JSON

console.log(typeof jsonvingadores)//Note que agora é uma string

const novoVingadores = JSON.parse(jsonvingadores) //Transformando em OBJETO

console.log(typeof novoVingadores)//Agora o JSON virou um objeto do Javascript