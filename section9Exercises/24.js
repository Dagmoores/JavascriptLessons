/*
Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.
Exemplos:
contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1
*/

function countCharacter (character, inputString) {

    let count = 0

    chacteresAndEmptySpaces = inputString.split("")

    resultString = chacteresAndEmptySpaces.filter(e => e != " ")

    
    function callback(e) {
        if (e == character) {
            return count += 1 
        }
    }

    resultString.forEach(callback)
    
    return console.log(count)

}

countCharacter("r", "A sorte favorece os audazes")
countCharacter("c", "Conhece-te a ti mesmo")