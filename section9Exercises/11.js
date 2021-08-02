/*
Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:
Exemplos:
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]
*/

function newArray (array) {

    function callback(e, i) { 
        if (i == 0 || i == array.length -1) {
            return e
        } 
    }

    const arrayResultado1 = array.map(callback)
    const arrayResultado2 = arrayResultado1.filter(e => e != undefined)

    console.log(arrayResultado2)
}

newArray([10, 20, 30, 40])
newArray([10, 20, 30, "sadsasd"])
newArray([[], 20, 30, "sadsasd"])