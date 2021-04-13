/* 32) Construir um algoritmo que calcule a média aritmética dos valores 
de um vetor de inteiros. */ 

let vector = [1, 3, 8, 10, 12, 89]
let media = 0
let result = 0

function mediaCalc(vector) {
  for (i = 0; i < vector.length; i++) {
    media += vector[i]
  }
  result = media / (i)
  console.log(result)
}

mediaCalc(vector)
