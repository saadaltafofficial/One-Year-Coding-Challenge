const numbersArray = [4, 6, 6, 8, 10, .1, -49]

const frequencyofItem = (arr, item) => {
    let count = 0;
    for(let num of arr){
        if(num === item){
            count++
        }
    }
    return count
}

console.log(frequencyofItem(numbersArray, 4))
