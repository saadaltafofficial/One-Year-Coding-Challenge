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

function findSmallestNumber(Arr){
  if(Arr.length === 0){
    return null
  }
  let smallestNumber = Arr[0]
  for(let i=0; i < Arr.length; i++){
    if(Arr[i] < smallestNumber){
      smallestNumber = Arr[i]
    }
  }
  return smallestNumber
}

console.log(findSmallestNumber(numbersArray))
console.log(findSmallestNumber(numbersArray))
