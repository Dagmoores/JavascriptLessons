/*
11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
*/

function leapYearCalc (year) {
    leapYearCheacker = year % 4
    learYearCheacker100 = year % 100
    learYearCheacker400 = year % 400
    if (Number.isInteger(leapYearCheacker)) {
        console.log('It is a leap year')
        return true
    } else {
        console.log('It isnt a leap year')
        return false
    }
    //keep from here
    if ()
    
}   


leapYearCalc (2000)
