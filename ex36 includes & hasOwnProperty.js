/*==============================
========= Arrays =============*/

let array = [2 , 5 , 6 , 7 , 9]
console.log(array.includes(2))

/*==========================
========= Objects ===========*/
const developer = {
    name: "Jessica Wilkins",
    country: "United States",
    isEmployed: true
  };

const key = ["name" , "car"]
const check = developer.hasOwnProperty(key)
console.log(check)

if(key[1] in developer){
  console.log('deu certo')
}
