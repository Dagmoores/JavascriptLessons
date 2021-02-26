/*
23) Escreva um algoritmo que leia o código de um aluno e suas três notas
Calcule a média ponderada do aluno, considerando que o peso para a 
maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO"
se a média for maior ou igual a 5 e "REPROVADO" se a média for menor 
que
5. Repita a operação até que o código lido seja negativo.
*/

function calcNote (x, y, z) {
  if (x > y && x > z) {
    noteWeight1 = x * 4
    noteWeight2 = y * 3
    noteWeight3 = y * 3
  }
  if (y > x && y > z) {
    noteWeight1 = y * 4
  }
  if (z > x && z > y) {
    noteWeight1 = z * 4
  }              
}
