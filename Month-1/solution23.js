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
