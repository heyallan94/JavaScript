/*
Podemos escrever um set que aceitam tudo, menos alguns caracteres com not

Lembrando que combinações serão aceitas e apenas negada os de padrões

Ao escrever o regex note que 'ELE NÃO ACEITA O PADRÃO' 
Se tiver PADRAO + OUTRAS COISAS, ele aceita
Se tiver APENAS O PADRÃO, ELE NEGA

*/

let padrao = /[^123]/ //Você vai retornar false tudo que tiver 123 APENAS

/*
Ao colocarmos um ^ no inicio estamos dizendo "NÃO ACEITO O PADRÃO 123 "
*/

console.log(padrao.test('a'))//NÃO TEM O PADRÃO 123 dentro de A. Verdade, não tem!
console.log(padrao.test('1o2l3l'))//NÃO TEM APENAS O PADRÃO 123. Verdade, não tem!
