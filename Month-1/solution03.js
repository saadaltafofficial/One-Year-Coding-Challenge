function evenOrOdd(num){
  let int = num
  if(int % 2 === 0){
    return `${int} is an Even number.`
  } else {
    return `${int} is an Odd number.`
  } 
}


console.log(evenOrOdd(5))
console.log(evenOrOdd(7))
console.log(evenOrOdd(4))
