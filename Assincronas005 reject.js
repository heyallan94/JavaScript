/*
Além do resolve, há o médoto reject
Que é quando determinada lógica não satisfaz o programa
então podemos usar o reject ao invés de resolve

Resolve e reject terminam a Promise, ou seja, não podemos
chamar mais o then, por exemplo
*/

function verificarAlgo(num) {
    return new Promise((resolve, reject)=>{
        if(num == 2) {
            resolve(console.log('O número é 2'))
        } else {
            reject(new Error('Falha! O número requerido é 2'))
        }
    })
}

verificarAlgo(3)