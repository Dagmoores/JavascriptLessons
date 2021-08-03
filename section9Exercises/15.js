/*
Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
💡 Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele
por 2 é zero.
*/

function pairNumberAndPairIndex (inputArray) {

    function callback (e, i) {
        if (i % 2 == 0) {
            return e
        }
        if (e % 2 == 0) {
            return e
        }
    }
    console.log(inputArray.map(callback))
}

pairNumberAndPairIndex([11, 23, 33, 44, 55])