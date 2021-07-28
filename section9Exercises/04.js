/* Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês. */

function numberToMonth (number) {
    if (number === 1) {
        console.log('janeiro')
    } else if(number === 2) {
        console.log('fevereiro')
    } else if(number === 3) {
        console.log('março')
    } else if(number === 4) {
        console.log('abril')
    } else if(number === 5) {
        console.log('maio')
    } else if(number === 6) {
        console.log('junho')
    } else if(number === 7) {
        console.log('julho')
    } else if(number === 8) {
        console.log('agosto')
    } else if(number === 9) {
        console.log('setembro')
    } else if(number === 10) {
        console.log('outubro')
    } else if(number === 11) {
        console.log('novembro')
    } else if(number === 12) {
        console.log('dezembro')
    } else {
        console.log('Invalid number')
    }
}

numberToMonth(5) 
numberToMonth(2) 
numberToMonth(11) 
numberToMonth(12) 
numberToMonth(16) 