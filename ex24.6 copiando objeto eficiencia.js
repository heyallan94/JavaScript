let casa = {
    quarto: true,
    portas : 9,
    janelas : false,
    eletricidade : 250
}

let casa2 = {
        ...casa, //O objeto novo recebe tudo do outro
        eletricidade: 180 //Se quiser adicionar/mudar alguma chave, coloca após
}

console.log(casa2)