function FAcao(n1=0, n2=0, n3=0, n4=0, n5=0){//função FAcao, de parametros n1 n2 n3 n4 n5, NOTE QUE ao colocar =0, sem um parametro, ele mesmo já deduz que o parametro é 0, e será substituido ao colocar um parametro
    let res = n1 - n2 - n3 + n4 + n5//bloco do que fazer
    return res //retorne res
}

console.log(FAcao(1,10))//Atenção, o console.log, chama ação FAcao com DOIS parametros. Eles são subtituídos respectivamente. MAS, se você
                        //Não digitar nenhum parametro, ele assume que é 0, pois está configurado =0. Se colocar algo que não é número irá
                        // dar erro de NaN. Se colocar mais parametros que a função pede, ele não mostra os outros.