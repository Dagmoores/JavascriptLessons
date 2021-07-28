/* 
Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.
Exemplos:
estaEntre(10, 100, 50) // retornará true 
estaEntre(16, 100, 160) // retornará false
estaEntre(3, 150, 3) // retornará false
estaEntre(3, 150, 3, true  // retornará true 
*/

function inBetween (number, minimum, maximum, inclusive = false) {

    if (number > minimum && number < maximum) {
        return console.log(true)
    } else if (number < minimum || number > maximum) {
        return console.log(false)
    } else if ((number == minimum || number == maximum) && inclusive === false) {
        return console.log(false)
    } else if ((number == minimum || number == maximum) && inclusive === true) {
        return console.log(true)
    } else {return console.log('Exception caught')}
}

inBetween(1, 0, 100)
inBetween(1, 2, 100)
inBetween(1, 2, 100, true)
inBetween(2, 2, 100)
inBetween(2, 2, 100, true)