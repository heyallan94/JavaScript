let horario = new Date()
let hora = horario.getHours()
console.log(`São ${hora} horas`)
if (hora >=0 && hora <8){
    console.log('É de madrugada, você deveria estar dormindo')
}
else if(hora >=8 && hora <12){
    console.log('Tenha um bom dia!')
}
else if(hora == 12){
    console.log('Bom almoço!')
}
else if(hora >12 && hora <=18){
    console.log('Tenha uma boa tarde!')
}
else if(hora <=23){
    console.log('Boa noite')
}
else {(hora >=24)
    console.log('Hora inválida!')}

