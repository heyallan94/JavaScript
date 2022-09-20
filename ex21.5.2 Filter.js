
const prices = [{
    id : 211 ,
    price : 2500,
    tag : 'cellphone',
    description : 'A white cellphone'
},{
    id : 552 ,
    price : 15,
    tag : 'mouse',
    description : 'This is cheap mouse'
},{
    id : 243 ,
    price : 1445,
    tag : 'TV',
    description : '4k TV 20" '
},{
    id : 674 ,
    price : 375,
    tag : 'graphic card',
    description : 'gtx 760 2gb'
}]



const prices500mores = prices.filter(elem => { return elem.id > 500})



console.log(prices500mores)