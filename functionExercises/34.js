/* 34) Construa uma função que receberá duas Strings de tamanhos 
variados e que retornará True ou False caso todos os caracteres
(independentemente de ser maiúsculo ou minúsculo) estejam contidos em
ambas palavras. */



function stringChecker(string1, string2) {
  
string1 = "abc";
string2 = "ABC";
p = 0; 
splited1 = [];
splited2 = [];
  
  string1 = string1.toUpperCase();
  string2 = string2.toUpperCase();
  splited1 = string1.split("");
  splited2 = string2.split("");

  for(i = 0; i < splited1.length; i++) {
    while(splited1[i] == splited2[p]) {
    p++
    }
    }   
if (i != p) {
  return false;
} else {
  return true;
}

}

stringChecker();
