
/* DESAFIO DO DIA 16/04/2021 - Sexta-feira
Nível de dificuldade:  ⭐⭐
Faça um programa para identificar se 5 números são primos.
Número primo, é um número natural, maior que 1, apenas divisível 
por si próprio e pela unidade. */



function testPrime () {
    let numbers = [17, 2, 1, 13, 15]
    let primeNumbers = [];
    let tester;
    
    
    for (i = 0; i < numbers.length; i++) {
        
    tester = true;

        for (d = 2; d <= 7; d++) {

            if (numbers[i] <= 1 || numbers[i] % d == 0) {
                tester = false;
        }
    } 
    if (tester == true) {
        primeNumbers.push(numbers[i])
         } 
    }
    console.log(primeNumbers)
}

testPrime();
