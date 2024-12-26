let arr = [1, 2, 3, 4, 9]
let largestNum;

// Method One
largestNum = Math.max(...arr)


// Method Two
for(let num of arr){
  if(num > largestNum){
    largestNum = num
  }
}

// Method Three
for(let i=0; i <= arr.length; i++){
  if(arr[i] > largestNum){
    largestNum = arr[i]
  }   
}

console.log(largestNum)
