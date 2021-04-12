/* 29) Utilizando a estrutura de repetição for, faça uma função que 
percorra um vetor e conte quantos números deste vetor estão no intervalo
[10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */

let vector = [1, 2, 56, 69, 5, 15, 20, 10, 12, 96, 53, 21]
let inside = 0
let outside = 0

for (i = 0; i < vector.length; i++) {
  if (vector[i] >= 10 && <= 20) {
    inside++
  } else {
    outside++
  }
}

console.log("inside: ", inside)
console.log("outside: ", outside)
