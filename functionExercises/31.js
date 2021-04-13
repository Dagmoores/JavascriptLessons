/* 31) Escrever um algoritmo que percorre um vetor de inteiros, conta 
quantos números negativos há nesse vetor e imprime a quantidade 
no console. */

vector = [1, -12, 4, 5, 98, -34, -5, 9];
let negative = 0;

for (i = 0; i < vector.length; i++) {
  if (vector[i] < 0) {
    negative++
  }
}

console.log(negative)
