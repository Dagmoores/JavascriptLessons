/* 34) Construa uma função que receberá duas Strings de tamanhos 
variados e que retornará True ou False caso todos os caracteres
(independentemente de ser maiúsculo ou minúsculo) estejam contidos em
ambas palavras. */



function stringChecker(string1, string2) {
  
string1 = "abc";
string2 = "ABC";
splited1 = [];
splited2 = [];
  
  string1 = string1.toUpperCase();
  string2 = string2.toUpperCase();
  splited1 = string1.split("");
  splited2 = string2.split("");

  for(i = 0; i < splited1.length; i++) {
    p = 0;
    while(splited1[i] == splited2[p]) {
      p++
    }
    }   
if (i != (p - 1)) {
  return false;
} else {
  return true;
}
console.log(i)
console.log(p)
}

stringChecker();
