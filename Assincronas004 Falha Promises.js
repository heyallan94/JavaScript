/**
 * Uma promise pode falhar, podemos reter esse erro
 * com um método catch
 * 
 * Com ele podemos exibir o erro no console e fazer
 * o debug no código
 */

let promiseErrada = Promise.resolve(new Error('Algo deu errado'))

console.log('Outra parte do código')

promiseErrada.then(value=>console.log(value))
.catch(reason => console.log('Falhou' + reason)) //Pegou o erro