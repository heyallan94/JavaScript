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

const key = "name"
const eai = developer.hasOwnProperty(key)
console.log(eai)
