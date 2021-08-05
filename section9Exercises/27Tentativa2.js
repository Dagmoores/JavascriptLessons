/*
Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
exemplo a seguir:
Exemplo:
inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}
*/

function inverter (inputObj) {

    let array = []
    let array1 = []
    let array2 = []
    let object = {}
    
    for (property in inputObj) {
    
        array.push(property, inputObj[property])
    }

    
    array1 = array.filter((e, i) => i % 2 != 0)
    array2 = array.filter((e, i) => i % 2 == 0)

    console.log(array1, array2)

    for (i = 0; i < array1.length; i++){
    
    x = array1[i]
        
    object[x] = array2[i] 
    }

   console.log(object)
}

inverter({ a: 1, b: 2, c: 3})
console.log()
inverter({ 1: "a", b: 2, c: 3})