/*
Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.
Exemplos:
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"
*/

function returnWithoutVowels (inputString) {

    arraySplittedString = inputString.split("")


    function callback (e) {

        if (e == "A" || e == "E" || e == "I" || e == "O" || e == "U") {
            e = e.toLowerCase()
        }

        return e != "a" && e != "e" && e != "i" && e != "o" && e != "u"
    }

    result = arraySplittedString.filter(callback).toString().replace(/,/g, "")
    return console.log(result)
}

returnWithoutVowels("FUndAmentos")
returnWithoutVowels("Cod3r")