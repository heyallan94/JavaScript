// Retorna igual ao exec com outros parametros

/*
Na grande maioria usamos test() que já retorna se existe ou não o padrão
exec() Pouco utilizado
match() pouco utilizado
*/

const frase = 'O número 15 está aqui, e o número (7) aqui'.match(/\d+\)/)

console.log(frase) //Note que ele vai atrás do padrão