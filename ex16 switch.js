let agora = new Date()//a variavel 'agora' recebe a Data exata
let DiaSem = agora.getDay()//a variavel DiaSem recebe os dias numerados de 0 a 6, onde 0 = domingo e 6 sábado, nesse caso o 0 conta
console.log(agora)//mostre o valor da variavel agora
console.log(DiaSem)//mostre o valor da vairavel DiaSem

/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
*/
let Dia = 3 //Aqui forcei uma nova variável com valor que eu atribuí para testar o console log

switch(Dia) { //Aqui, switch(variavel){case 0} é o mesmo que "em caso de 0, acontecer isso ou aquilo"
    case 0://em case 0 vai acontecer isso abaixo
        console.log('Domingo')//console.log escreva 'Domingo'
        break//break para freia o switch e sair do console, senão vai executar tudo
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-fer')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break    
    case 6:
        console.log('Sábado')
        break   
    default:
        console.log('ERRO! Dia inválido')
}