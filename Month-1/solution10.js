let numbersArray = [1, 4, 8, 0, 3, 4, 34, 97]

function sumOfArray(numbersArray){
  let total = 0;
  for(i=0; i < numbersArray.length; i++){
    total += numbersArray[i]
  }
  return total
}

console.log(sumOfArray(numbersArray))
