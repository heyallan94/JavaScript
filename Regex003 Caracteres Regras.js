/**
 * \d Qualquer numero de caractere
 * Aceita /[0-9]/
 * 
 * \w um caractere alfanumerico ('teste')
 * Aceita Letras e números
 * 
 * \s qualquer ESPAÇO em branco
 *  Aceita quebras de linhas e espaços apenas
 * 
 * \D caracteres não digitos
 * Não aceita números
 * 
 * \W caractere não alfanumerico
 * Não aceita letras e números
 * 
 * \S caractere que nao seja ESPAÇO em branco
 * Não aceita espaços, quebras de linhas
 * 
 * . 
 * Aceita qualquer carctere menos nova linha
 * 
 * ^ Usar no começo e $ usar no final, significa QUE AQUELE PADRÃO ALI COMEÇA ALI E TERMINA ALI
 * por exemplo: /^[A-Z]+$/ , Este padrão só aceita uma string que começa de A - Z em qualquer parte da 
 * string. Como a string é o padrão inteiro, toda string será assim.
 * 
 */

const pontoRegex = /./
console.log(
    pontoRegex.test(' '),
    pontoRegex.test(0123456),
    pontoRegex.test('0123456'),
    pontoRegex.test('0123asasvc#@'),
    )

const dRegex = /\d/ // [0-9] Onde tiver número
console.log(dRegex.test(' '),
    dRegex.test(0123456),
    dRegex.test('0123456'),
    dRegex.test('0123asasvc#@')) 

const dRegexD = /\D/ // [^0-9] Onde tiver ^ significa SÓ NUMEROS = FALSE| LETRAS E NÚMEROS = TRUE
console.log(dRegexD.test(' '),
    dRegexD.test(0123456),
    dRegexD.test('0123456'),
    dRegexD.test('0123asasvc#@')) 

const sRegex = /\s/ // Onde tiver espaços ele aceita
console.log(sRegex.test(' '),
    sRegex.test(0123456),
    sRegex.test('0123456'),
    sRegex.test('0123asasvc#@')) 

const wRegex = /\w/ // Onde tiver espaços ele NÃO aceita
console.log(wRegex.test(' '),
    wRegex.test(0123456),
    wRegex.test('0123456'),
    wRegex.test('0123asasvc#@')) 
