// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

function biggerOrEqual(number1, number2) {
    if (number1 >= number2) {
        return console.log(true)
    } else if (number1 < number2) {
        return console.log(false)
    } 
}

biggerOrEqual(1, 0)
biggerOrEqual(5, 5)
biggerOrEqual(1000, 102220)