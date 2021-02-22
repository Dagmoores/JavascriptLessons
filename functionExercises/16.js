  
/*
16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

function calc(operation, number1, number2) {
    switch (operation) {
        case 'sum':
            console.log(number1 + number2)
            break;
        case 'subtraction':
            console.log(number1 - number2)
            break;
        case 'division':
            console.log(number1 / number2)
            break;
            //keep from here
        case 'multiplication':
            console.log(number1 * number2)
            break;
            default:
            console.log('invalid Operation')
    }
}

calc('sum', 1, 2)
calc('subtraction', 100, 30)
calc('subtraction', 100, 200)
calc('division', 55, 4)
calc('division', 55, 0)
calc('multiplication', 4, 4)
calc('pow', 4, 4)
