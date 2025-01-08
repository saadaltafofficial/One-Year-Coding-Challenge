const numArray = [5, 6, 5, 6, 4, 2, 20, 45, 53]

const findLargestNum = (arr) => {
    let largestNum = -Infinity;
    let secondLargestNum = -Infinity;
    for(let num of numArray){
        try {
            if(num > largestNum){
                secondLargestNum = largestNum
                largestNum = num;
            } else if( num > secondLargestNum && num < largestNum){
                secondLargestNum = num;
            }             
        } catch (error) {
            console.log(error)
        }
        
    }
    return secondLargestNum !== -Infinity ? secondLargestNum : null;
}

console.log(findLargestNum(numArray))
