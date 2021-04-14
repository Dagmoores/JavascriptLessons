/* 34) Construa uma função que receberá duas Strings de tamanhos 
variados e que retornará True ou False caso todos os caracteres
(independentemente de ser maiúsculo ou minúsculo) estejam contidos em
ambas palavras. */

let tester;

function stringChecker(string1, string2) {
  
string1 = "abc";
string2 = "ABCh";

splited1 = [];
splited2 = [];
  
  string1 = string1.toUpperCase();
  string2 = string2.toUpperCase();
  splited1 = string1.split("");
  splited2 = string2.split("");

    for(i = 0; i < splited1.length; i++) {
     for(p = 0; p < splited2.length; p++) {
       if(splited1[i] == splited2[p]) {
         tester = true;
       } else {
         tester = false;
       }
     }
    }  
  return tester;
}



stringChecker();
