/*
Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
Exemplos:
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []
*/

function callback(e) {
    let x = NaN
    if(typeof e == typeof x) {return e}
}

function filterNumbers (array) {
    console.log(array.filter(callback))
}

filterNumbers([1, 232, "abc", "Manny Calavera", "23"])