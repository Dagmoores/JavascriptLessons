
/* DESAFIO DO DIA 16/04/2021 - Sexta-feira
Nível de dificuldade:  ⭐⭐
Faça um programa para identificar se 5 números são primos.
Número primo, é um número natural, maior que 1, apenas divisível 
por si próprio e pela unidade. */

//Unfinished

function testPrime () {
    let numbers = [17, 2, 1, 13, 15]
    let primeNumbers = [];
    
    for (i = 0; i < numbers.length; i++) {
        for (d = 2; d <= 7; d++) {
            if (numbers[i] > 1 && numbers[i] % d != 0 
                && numbers[i] != primeNumbers[primeNumbers.length - 1]) {

                primeNumbers.push(numbers[i]);

console.log("push - ", "i:", i, "Numbers[i]:", numbers[i], "primeNumbers:", primeNumbers, "d:", d,
"last Prime Number:", primeNumbers[primeNumbers.length - 2]);
   
            } else if (numbers[i] % d == 0 || numbers[i] % (d - 1) == 0) {

console.log("pop1 -  ", "i:", i, "Numbers[i]:", numbers[i], "primeNumbers:", primeNumbers, "d:", d,
"last Prime Number:", primeNumbers[primeNumbers.length - 2]);

                primeNumbers.pop();
                i++;


            } else if (numbers[i] == primeNumbers[primeNumbers.length - 2]) {


console.log("pop2 -  ", "i:", i, "Numbers[i]:", numbers[i], "primeNumbers:", primeNumbers, "d:", d,
"last Prime Number:", primeNumbers[primeNumbers.length - 2]);
                
                primeNumbers.pop();
                i++;
            }
        }
    }
    console.log(primeNumbers)
    } 
    
    testPrime();
