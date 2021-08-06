/*
Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
Exemplos:
segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 
*/


function secondBiggest (array) {

    biggest1 = Math.max.apply(null, array)

    arrayBiggest2 = array.filter((e, i) => e < biggest1)

    biggest2 = Math.max.apply(null, arrayBiggest2)


    console.log(biggest2)
}

secondBiggest([12, 16, 1, 5])
secondBiggest([8, 4, 5, 6])
