/* DESAFIO DO DIA 23/04/21 - INVERTENDO STRINGS
Nível de dificuldade: ⭐ (Retirado de http://devfuria.com.br/)
Faça um programa que inverta uma string, exemplo: “animal” em 
“lamina”.
Dica: Se achar o desafio muito fácil, tente encontrar 
outras alternativas de resolvê-lo. */



function rewrite(word) {

let arrayWord = word.split("");
let tempArray = [];

console.log(word);

    for (i = 0; i < arrayWord.length; i++) {
        
     tempArray[i] = arrayWord[arrayWord.length - i -1];
    };


    console.log(tempArray.join("").toString())
 };
 
 rewrite("pessego")
