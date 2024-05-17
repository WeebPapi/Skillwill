function isEqual(a, b) {
    if (a === b)
        return `${a} is equal to ${b}`
    return `${a} is not equal to ${b}`    
}

function fahrenheitToCelsius(temp){
    if(typeof temp === 'number')
        return (`${temp} degrees Fahrenheit is equal to ${5 * (temp - 32)/9} degrees celsius`)
    return false
}

function calculate(a, b , operation){
    if (typeof a !== 'number' || typeof b !== 'number'){
        return false
    }
    if (operation === '+')
        return a + b
    else if (operation === '-')
        return a - b
    else if (operation === '*')
        return a * b
    else if (operation === '/')
        return a / b
    
    return false
}
