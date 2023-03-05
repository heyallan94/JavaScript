/*
O forEach vai percorrer cada item do array e fazer oque você pedir
====================IMPORTANTE======================
For each não retorna um novo array, ele simplesmente faz algo com cada index
oque você pedir, mas o array principal não é alterado
*/

let nomes = [ "João" , "Diego" , "Douglas" , "Matheus" , "Neula"]

nomes.forEach(function(i){
   console.log(i)
})

for(let i = 0; i <= nomes.length; i++){
    console.log(nomes[i])
}

