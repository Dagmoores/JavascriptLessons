/* DESAFIO DO DIA 16/04/2021 - Sexta-feira
Nível de dificuldade:  ⭐⭐
Faça um programa para identificar se 5 números são primos.

Número primo, é um número natural, maior que 1, apenas divisível 
por si próprio e pela unidade. */



function testPrime () {
let numbers = [1, 2, 17, 13, 15];
let primeNumbers = [];

for (i = 0; i < numbers.length; i++) {
   for(p = 2; p <= 7; p++) {

     if(numbers[i] % p != 0) {
       primeNumbers.push(numbers[i]);
     } else if (numbers[i] % p == 0) {
       primeNumbers.pop();
     }
   }
 } 
  console.log(primeNumbers[i]);
} 

testPrime();
