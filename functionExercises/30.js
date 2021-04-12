/* 30) Escreva um algoritmo que percorre um vetor de inteiros e defina 
o maior e menor valor dentro do vetor. */

let vector = [1, 23, 12, 5, 76, 12, 22, 5, 4, 3, 1, 2, 9, 34, 75]
let higher = null
let lowest = Infinity

for (i = 0; i < vector.length; i++) {
  if (vector[i] > higher) {
    higher = vector[i]
  } else if (vector[i] < lowest) {
   lowest = vector[i] 
  } else {
  }
}
console.log("Higher number: ", higher)
console.log("Lowest number: ", lowest)
