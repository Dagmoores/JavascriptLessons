/* 
Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:
Exemplos:
objetoParaArray({
nome: "Maria",
profissao: "Desenvolvedora de software"
}) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
objetoParaArray({
codigo: 11111,
preco: 12000
}) // irá retornar [["codigo", 11111], ["preco", 12000]]
*/

function objectToArray (object) {

    let array = []
    let tempProperty
    let tempValue

    for (property in object) {

        let tempArray = []
        tempProperty = property.toString()
        tempValue = object[property].toString()

        tempArray.push(tempProperty, tempValue)
        array.push(tempArray)
    }
    return console.log(array)
}

objectToArray({name: "Daniel", idade: 92, apelido: "Dani", hobbies: "Videogames"})