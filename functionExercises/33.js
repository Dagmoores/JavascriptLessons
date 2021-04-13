/* 33) Crie três vetores, chamados vetorInteiro, vetorString e 
vetorDouble. Cada um destes vetores deverá conter quatro valores, 
sendo o primeiro com valores inteiros, o segundo com strings e o 
terceiro com valores decimais. Declarados os vetores, utilize a função
de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado 
deverão aparecer no console. */

let vectorInt = [1, 9, 8, 10]
let vectorStd = ["twelve", "Twenty Four", "Twenty Five", "Thirty"]
let vectorDouble = [0.23, 1.25, 6.389, 0.65]

function concat() {
  return [].concat(vectorInt, vectorStd, vectorDouble)
}

console.log(concat())
