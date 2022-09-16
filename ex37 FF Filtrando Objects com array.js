const minhaschaves = ['name' , 'age']//Aqui são os nomes que eu quero que retornem

const cliente = {//Objeto que quero filtrar
    name: 'John',
    age : 45,
    city: "Las vegas",
    bank: 24000
} 

const clientefiltrado = {} //Importante criar um novo objeto vazio para ser populado pelos filtros



function objfilterbyarray(arraykeys , objtofilter , objfiltered){
    //This function need the objfiltered an empty object( const objfiltered = {})
    arraykeys.forEach(key => {
        return objfiltered[key] = objtofilter[key]
    })//will return and populate objfiltered
}

objfilterbyarray(minhaschaves , cliente , clientefiltrado)

console.log(clientefiltrado)