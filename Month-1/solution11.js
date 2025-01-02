const numbersArray = [4, 6, 6, 8, 20, 100, 49]

function averageArray(Arr) {
  let total = 0
  let average = 0
  for(let number of Arr){
    total += parseInt(number)
  }

  average =  total/Arr.length
  return average.toFixed(2)
}

console.log(averageArray(numbersArray))
