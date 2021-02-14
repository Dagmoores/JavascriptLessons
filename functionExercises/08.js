/*
08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
*/

/*
08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
*/

//not finished, need some fixes 
const scoresString = "30, 20, 30, 10, 90, 60, 70, 80"
 
function toCompare (scoresString) {
const scores = scoresString.split(", ")
let recordsBreakingAmount = 0
let worstGame = 1
let highestScore = scores[0]  
let lowestScore = scores[0]

for (i = 1; i < scores.length; i++) {
    if (highestScore > scores[i]) {
        highestScore = scores[i] 
        recordsBreakingAmount++ 
    }else if (lowestScore > scores[i]) {
        lowestScore = scores[i]
        /*Here we are using plus 1, cause we want the function to return the number of the game, and no
        the position of the score in the array*/
        worstGame = 1 + i
    }
    }
    return [recordsBreakingAmount, worstGame]
}

console.log(toCompare(scoresString))
