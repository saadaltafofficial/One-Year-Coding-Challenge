// Reverse the digits of a number.

// through method
let stringnumber = "2395820592"
let reversed = stringnumber.split("").reverse().join("")

// Manually
let number = [2,0,1,2,3,2,4]
let reversedList = []
for(let i = number.length -1; i >= 0; i--) {
    reversedList.push(number[i])
}

// Test
console.log(reversedList)
console.log(reversed)
