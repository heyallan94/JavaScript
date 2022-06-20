let valor = [4 , 6 , 3 , 5 , 7 , 8] //Defini um array
let valorMaior = valor[0] //Se o array não possuir números negativos, não há problema em ser let valorMaior = 0. Porém, use dessa maneira
let valorMenor = valor[0] //Repare que é melhor iniciar com o primeiro array que com um valor de 0

for(let v = 0; v < valor.length; v++){//esse for está pegando TODOS os elementos de dentro do array
  let n = valor[v]//aqui o dado deve ser armazenado, por exemplo, na variável n, vai receber o valor do array 'valor[v]', v inicia em 0, ou seja, o primeiro valor é 4. Logo, o valor de let n = 4, porém SEMPRE DEVE INICIAR PELO INDEX
  if( n > valorMaior){//se n for maior que o primeiro index // Note que n inicialmente vale 4 e valorMaior também, inicialmente vale 4
  valorMaior = n //então o primeiro index recebe o valor de n                                           //os valores só são alterados após
}}                                                                                                      //o incremento

for(let v = 0 ; v < valor.length; v++){
  let n = valor[v]
  if(valorMenor > n){//Aqui estava dando muito problema se o valor de valorMenor for 0. Nesse caso usei o primeiro index
    valorMenor = n
}}

console.log(`O maior valor desse array é ${valorMaior}.`)
console.log(`O menor valor desse array é ${valorMenor}.`)