/*
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
*/

function numberToPlusString (number) {

    let array = []
    let numero = 1

    if (typeof number != typeof numero) {
        console.log("You must choose a number")
    }
    else {
        for (i = 0; i < number; i++) {
        array.push("+")
        }
        let string = array.toString().replace(/,/g, "")
        console.log(string)
    }
}

numberToPlusString(4)
numberToPlusString(12)
numberToPlusString("sasdaad")
numberToPlusString()
// numberToPlusString(NaN) // kkkkkkkk Not a number = number (?)