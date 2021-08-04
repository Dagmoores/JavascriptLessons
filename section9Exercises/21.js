/*
Criar uma função que receba um array de números e retorne o menor número desse array.
Exemplos:
menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15
*/

function lowestNumber(inputArray) {

    function callback (previous, current) {
        if (previous <= current) {
            return previous
        } else {return current}
    }
    let result = inputArray.reduce(callback)
    return console.log(result) 
}

lowestNumber([10, 5, 35, 65]) 
lowestNumber([5, -15, 50, 3])