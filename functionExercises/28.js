/* 28) Ler um vetor de números inteiros e 
imprimir quantos são pares e quantos são ímpares. */

let vector = [1, 32, 69, 54, 87, 23, 12, 86, 87]
let pair = []
let pairNumber = 0
let odd = []
let oddNumber = 0

for (let i = 0; i < vector.length ; i++) {

  if (vector[i] % 2 != 0) {
    odd.push(vector[i])
    pairNumber++
  } else {
    pair.push(vector[i])
    oddNumber++
  }
}

console.log(`pair: ${pairNumber}`)
console.log(`odd: ${oddNumber}`)
