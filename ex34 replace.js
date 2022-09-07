let texto1 = "O método REPLACE troca elementos"
console.log(`Este é a variável sem replace: [${texto1}]`)

let texto1replace = texto1.replace('REPLACE' , 'X')/* VARIÁVEL.replace(OQUE EU QUERO SUBISTITUIR, OQUE POR NO LUGAR) */
console.log(texto1replace)//Ele vai substituir EXATAMENTE oque está ali, REPLACE, o primeiro REPLACE
                         //Se tiver outros REPLACE ele não substitui. Apenas o primeiro
                         //Se for um Replace, também não substitui, pois tem minusculas, diferente da original.
console.log(' ')
let texto2 = 'Replace REPLACE Replace RePLAce REPLACE'                            
console.log(texto2)
let texto2ReplaceSemBarras = texto2.replace('Replace' , 'X')
console.log(texto2ReplaceSemBarras)

let texto2ReplaceComBarras = texto2.replace(/Replace/g , 'X')/*Adicionando / ao invés de '', ele pega todos*/
console.log(texto2ReplaceComBarras)                          //os dados com o nome de dentro, lembre-se de colocar
                                                             //um g ao final: /elemento/g
console.log('')

let texto3ReplaceComBarrasSemCaseSensitive = texto2.replace(/RePlAcE/gi , 'X')/*Nesse ultimo caso, ele troca TODOS*/
console.log(texto3ReplaceComBarrasSemCaseSensitive)                           //TODOS os replace, não importando
                                                                              //Onde estejam e sem CASE SENSITIVE
let exemplo = 'Exemplos'
exemplo.value.replace(/[^]/gi , '*')//replace todos os números dai

/*EXEMPLO DE MASCARA

let card = '0000 0000 0000 0000' 
console.log(card)


const maskcard = (card) => {
    return card
      .replace(/.(?=.{4})/g, "*")                        oque está entre {4}, significa que não vai replace os últimos
      .match(/.{1,4}/g)                                  4 values
      .join(" ");
  };
  
maskcard(iai)

console.log(maskcard(iai))
*/ 

let texto = 'O gato roeu a roupa'
console.log(texto)
console.log(texto.replace(texto[2] , 'r')) /* Para variáveis*/


texto.replace(/\d/gi, '*') = 'numeros'
text.replace(/[\n\r\s\t]+/gi, '*') = 'espaço'
text.replace(/[\w]/gi, '*') = 'todas letras e números'
