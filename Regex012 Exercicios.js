/*
Faça 3 regex: validar e-mail, data de nascimento e validar site
*/

const email = /\w+@\w+(.com|.com.br|)/
const birth = /[0-3][0-9]\/?\-?[0-1][0-9]\/?\-?([1-2][9-9][2-9][3-9]|[2-9][0-9][0-9][0-9])/
const site = /www.\w+.(com|com.br)/

console.log(email.test('AlexR@gmail.com'))
console.log(birth.test('25/05/1995'))
console.log(site.test('www.google.com'))

//Crie uma regex que aceita apenas LETRAS MAIÚSCULAS

const maiusculas = /^[A-Z ]+$/ //O espaço também é um caractere

console.log(maiusculas.test('A ROUPA DO REI DE ROMA'))

//Crie um padrão que começa com números e termina com a palavra ID

const id = /\d+[ID|id]/
console.log(id.test('2521121212ID'))

//Crie um padrão que inicia com a string 'Marca' e com 'NomeDaMarca' sendo Nike, Adidas ou puma

const marca = /\Marca: (Nike|Adidas|Puma)/

console.log(marca.test('Marca: Nike'))

//Crie um padrão que aceite só Ips

const ip = /\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}/

console.log(ip.test('1.1.0.1'))


