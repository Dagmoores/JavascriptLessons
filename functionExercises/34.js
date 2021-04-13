/* 34) Construa uma função que receberá duas Strings de tamanhos 
variados e que retornará True ou False caso todos os caracteres
(independentemente de ser maiúsculo ou minúsculo) estejam contidos em
ambas palavras. */

let string1 = "abc";
let string2 = "ABC";
let splited1 = [];
let splited2 = [];

function stringChecker(string1, string2) {
  string1 = string1.toUpperCase();
  string2 = string2.toUpperCase();
  splited1 = string1.split("");
  splited2 = string2.split("");

  for(i = 0; i < splited1.length; i++) {
    p = 0
    while(splited1[i] == splited2[p]) {
      p++
    }
  }
}        

