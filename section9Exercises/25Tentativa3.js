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

    let result1 = splittedWord.toString().replace(/,/g, "")

    let finalArray = []
    
    for (i = 0; i < inputArray.length; i++) {    

        let checkArray =  arraySplitedWords[i]

        let result2 = checkArray.filter((e, i) => i < 3).toString().replace(/,/g, "")
        
        if (result1 == result2) {
            
            finalArray.push(arraySplitedWords[i].toString().replace(/,/g, ""))
        } 
    }
    if(finalArray == []) {return console.log("we couldn't find similar words")
        } else {return console.log(finalArray)}
}


searchWord("pRO", ["programação", "MOBILE", "profissional", "aleluia", "probabilidade", "gloria"])
searchWord("python", ["javascript", "java", "c++"])