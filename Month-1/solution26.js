function checkLeapYear(year){
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        return `The given ${year} is a leap year.`
    } else {
        return `The given ${year} is not a leap year.`
    }
}
console.log(checkLeapYear(2025))
console.log(checkLeapYear(2026))
console.log(checkLeapYear(2027))
console.log(checkLeapYear(2028))
console.log(checkLeapYear(2029))
console.log(checkLeapYear(2030))
