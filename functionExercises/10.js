/*
10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

function integerChecker (integer) {
    integerDivided = integer / 3
    if (Number.isInteger(integerDivided)) {
        return console.log('It is divisible by 3')
    } else {
        return console.log('It isnt divisible by 3')
    }
}

integerChecker(3)
integerChecker(4)
integerChecker(17)
integerChecker(21)
