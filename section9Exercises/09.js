/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
Exemplos:
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]
*/

function pushAndRepeat (element, repetitionNumber) {
    let array = []

    for (i = 0; i < repetitionNumber; i++) {
        array.push(element)
    }

    console.log(array)
}

pushAndRepeat("Amadeus", 5)
pushAndRepeat("25", 3)
pushAndRepeat(12, 2)