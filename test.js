let number = 16

function findNextSquare(sq) {
    console.log(Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2))
  }

findNextSquare(number)
