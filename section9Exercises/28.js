/*
Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.
Exemplos:
filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]
*/

function filterByQuantity (array, number) {

    arrayString = array.map(e => e.toString())

    result = arrayString.filter(e => e.length == number)

    console.log(result)
}

filterByQuantity([38, 2, 365, 10, 125, 11], 2)
filterByQuantity([5, 9, 1, 125, 11], 1)