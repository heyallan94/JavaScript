let cidade = {
    bairros : 29,
    estado : "Rio de Janeiro",
    população : 8754235
}

console.log(cidade)
delete cidade.estado //Para deletar tal propriedade
console.log(cidade)
cidade.estado = "São Paulo" //Para adicionar uma propriedade
console.log(cidade)
cidade.população = 8900000 // Mudar outra já existente
console.log(cidade)
