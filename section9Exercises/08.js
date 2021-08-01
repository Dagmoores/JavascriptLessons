/* 
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
Exemplo:
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0
*/


function multiplyPositiveInteger (integer1, integer2) {

    // if para aceitar apenas inteiros maiores ou iguais a zero.
    if (integer1 < 0 || integer2 < 0) {
        console.log('You must choose a positive integer number')
    }
    
    // if para aceitar apenas inteiros e não float. 
    else if (integer1 != parseInt(integer1) || integer2 != parseInt(integer2)) {
        console.log('You must choose a positive integer number')
    } 
       
    // Se o número for inteiro e positivo, entra nesta condição
    else {
        const resultado = Math.imul(integer1, integer2)
        console.log(resultado)
    }
}

// multiplyPositiveInteger(5, 5)
// multiplyPositiveInteger(-1, 5)
// multiplyPositiveInteger(-1, 1.1)
// multiplyPositiveInteger(1, 1.1)
// multiplyPositiveInteger(659, 75)