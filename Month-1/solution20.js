function celciusToFarenheit(celicus){
    let farenheit = null
    farenheit = (celicus * 9/5) + 32
    return farenheit
}

function farenheitToCelcius(farenheit){
    let celcius = null
    celcius = (farenheit - 32) * 5/9
    return farenheit
}

console.log(celciusToFarenheit(37))
console.log(farenheitToCelcius(37))
