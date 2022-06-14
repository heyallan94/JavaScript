function paridade (par, impar){ //a função 'paridade', de parametros (par) chama a ação
    if(par%2 == 0){ //se o parametro ao dividir por 2 for igual a 0 
        console.log(`${par} é um número par!`)//imprima na tela, O resultado do parametro + concatenação 
    } else { //senão
        return('Por favor, digite um número par.') //return, como o nome diz, RETORNA um valor de saída
    }
}

paridade(30)// em algum momento a ação foi chamada, com um parametro de valor 30.
