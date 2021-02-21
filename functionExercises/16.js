/*
16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

function calc(number1, number2, operation) {
    switch (operation) {
        case 'sum':
            console.log(number1 + number2)
            break
        case 'subtraction':
            console.log(number1 - number2)
            break
        case 'division':
            console.log(number1 / number2)
            break
            //keep from here
        case ''
    }
}
