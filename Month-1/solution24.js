function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const result = findGCD(5, 10);
console.log(`The GCD of 5 and 10 is: ${result}`);

function LCM(a, b) {
    const LCM = a * b/ findGCD(a, b)
    return LCM 
}

const leastcommonmultiple = LCM(7,5);
console.log(`The LCM of given numbers is: ${leastcommonmultiple}`)
