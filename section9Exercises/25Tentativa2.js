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
    
    let x = 0
    
    let resultArray = []

    function callback(e) {



    console.log("e=",e, "splitedW=",  splittedWord[x])

    if (x < 3) {

        if (e == splittedWord[i]) {

            validator += 1

            console.log("x laço =", x)
            }
    x++
    } else {x = 0}

    console.log("x=", x)
    }

    
    for (i = 0; i < 3; i++) {    

        let checkArray =  arraySplitedWords[i]
        console.log(checkArray)
        checkArray.forEach(callback)
        console.log('saiu da callback')

        
        if (validator == 3) {
            resultArray.push(inputArray[x])
        
                validator = 0
        }
    }



    
    
  }  // console.log(splitteWord, arraySplitedWords)




searchWord("pRO", ["programação", "MOBILE", "profissional"])