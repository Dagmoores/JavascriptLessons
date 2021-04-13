/* 34) Construa uma função que receberá duas Strings de tamanhos 
variados e que retornará True ou False caso todos os caracteres
(independentemente de ser maiúsculo ou minúsculo) estejam contidos em
ambas palavras. */

let string1 = "abc";
let string2 = "ABC";
let checker1 = [];
let checker2 = [];

function stringChecker(string1, string2) {
  checker1 = string1.split("");
  checker2 = string2.split("");
  if(checker1 == checker2) {
    return true;
  } else {
    return false;
  }

}
stringChecker(string1, string2)
