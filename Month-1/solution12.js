const numbersArray = [4, 6, 6, 8, 10, .1, -49]

function findSmallestNumber(Arr){
  if(Arr.length === 0){
    return null
  }
  let smallestNumber = Arr[0]
  for(let num of Arr){
    if(num < smallestNumber){
      smallestNumber = num
    }
  }
  return smallestNumber
}

console.log(findSmallestNumber(numbersArray))
