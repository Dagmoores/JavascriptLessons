/*
A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
Exemplos:
buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []
*/

function searchWord (word, inputArray) {

    
    let splittedWord = word.toLowerCase().split("")

    let arraySplitedWords = inputArray.map(e => e.toLowerCase().split(""))

    let validator = 0

    let resultArray = []

    function callback(e) {
        if (e == splittedWord[x]) {

            // console.log("e =", e, "splitedWord[x] =", splittedWord[x])

            return validator += 1
        }
    }

    


        for (x = 0; x < inputArray.length; x++) {

        let checkArray =  arraySplitedWords[x]
        checkArray.forEach(callback)
        
        if (validator == 3) {
            resultArray.push(inputArray[x])
        
                validator = 0
        } 
     }

    
    // console.log(splitteWord, arraySplitedWords)

    if (resultArray == []) {
        return console.log("we couldn't find similar words")
    } else {return console.log(resultArray)}

}



searchWord("pRO", ["programação", "MOBILE", "profissional"])