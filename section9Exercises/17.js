/*
Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
Exemplos:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60
*/

function numbersSum (array) {
    arrayNumeros = array.filter(e => typeof e == typeof 1)
    console.log(arrayNumeros.reduce((p, c) => p + c))
}

numbersSum([10, 10, 10])
numbersSum([10, 10, "sadsa", 1543, undefined, []])