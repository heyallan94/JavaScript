/*
Tratamento de dados

Com o tratamento de dados, nós conseguimos tratar dados
no inicio da aplicação

Por exemplo "Digite um número" e o usuário digita uma letra
Se não houver tratamento de dados no inicio, o código irá falhar
lá na frente.
*/

function checarNumero(dado){
    if(isNaN(Number(dado))){//Deve-se colocar Number para ele receber strings de números também!
        console.log('Digite um número')
    }else{
        console.log('Número aceito.')
    }
}

checarNumero('a')

/*
Para verificar se um dado é um número em 
JavaScript, você pode usar a função isNaN() que 
retorna true se o valor passado como argumento 
não é um número e false se for um número.*/