/*
04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

function resultAndRemainder (a, b) {
    let result = a / b
    let remainder = a % b
    return console.log(`This is the result: ${result}`),
    console.log(`This is the remainder: ${remainder}`)
}

resultAndRemainder(10, 2)
