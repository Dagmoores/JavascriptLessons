/* 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas 
valores numéricos e um número inteiro. Faça com que a primeira função 
retorne outro vetor que será resultado da multiplicação de cada elemento
pelo número passado como parâmetro. A segunda função fará o mesmo da 
primeira se e somente se o valor do elemento for maior que 5. */

let vector = [1, 2, 3, 4, 5];
let vectorResult =[];
let number;

function multiply1 (vector, number) {
  for(i = 0; i < vector.length; i++) {
  vectorResult.push(vector[i] * number)
  }
  console.log("Vector 1", vectorResult);
}

function multiply2 (vector, number) {
  if(number > 5) {
  vectorResult = [];
  for(i = 0; i < vector.length; i++){
  vectorResult.push(vector[i] * number)
  }
  console.log("Vector 2", vectorResult);
  }  
}

multiply1(vector, 5);
multiply2(vector, 7);
