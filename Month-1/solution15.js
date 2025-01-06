const numbersArray = [4, 6, 6, 8, 10, .1, -49]
const uniqueArray = [...new Set(numbersArray)]
console.log(uniqueArray)
const duplicates = numbersArray.filter((item, index) => numbersArray.indexOf(item) === index)
console.log(duplicates)
