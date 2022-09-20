const objfiltered = {} //Have an empty object
const objtofilter = {name: "Allan", date: "16/09/22"}
const mykeys = ["name"]


function objfilterbyarray(arraykeys , objtofilter , objfiltered){
    //This function need the objfiltered an empty object( const objfiltered = {} )
    //***The objfiltered will have the filter, it will change the objfiltered data *****
    arraykeys.forEach(key => {
        if(objtofilter[key] !== undefined){
            objfiltered[key] = objtofilter[key]
        }       
        return objfiltered
    })//will return and populate objfiltered
}

objfilterbyarray(mykeys, objtofilter, objfiltered)

console.log(objfiltered)





