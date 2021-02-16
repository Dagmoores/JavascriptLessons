/*
10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

function integerChecker (integer) {
    integerDivided = integer / 3
    if (Number.isInteger(integerDivided)) {
        return true
    } else {
        return false
    }
}

console.log(integerChecker(3))
console.log(integerChecker(4))
console.log(integerChecker(17))
console.log(integerChecker(21))
