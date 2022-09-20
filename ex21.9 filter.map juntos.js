/*É possível que um método for esteja dentro do outro.
Note que nesse exemplo, queremos saber quem pediu apenas refrigerante
O array pedidos, tem a propriedade bebida que tem outros valores.
Usa-se o filter para encontrar tais valores.
NOTE QUE O FILTER vai achar os valores TRUE para bebida : 'Refrigerante' e vai retornar
FALSE para quem não for.

Seguindo essa lógica, o map irá mostrar quem é o true e o false e descartar o resto*/
let pedidos = [
    {
    id: 420, 
    nome:'Dener',
    alimento: 'Sandubão de Bacon',
    bebida: 'Suco Limão'
     },{
    id: 152, 
    nome:'Naiady',
    alimento: 'Sandubão Vegano',
    bebida: 'Suco de Laranja'
     },{
    id: 29, 
    nome:'Marcio',
    alimento: 'Coxinha',
    bebida: 'Suco de Uva'
     },{
    id: 33,
    nome:'Isabel',
    alimento: 'Sandubão de Picanha',
    bebida: 'Refrigerante'
     },{
    id: 55,
    nome:'José',
    alimento: 'Pizza',
    bebida: 'Refrigerante'
 }
];

//Iterador filter
let whoAskSoda = pedidos.filter(
    (seuParametro) =>{
        return seuParametro.bebida == 'Refrigerante'
    }).map(
        (qualquernome) => qualquernome.id)

console.log(whoAskSoda)