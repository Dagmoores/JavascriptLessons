/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function trianglesType (a, b, c) {
    if ((a != b) && (b != c) && (a != c)) {
        console.log('Scalene Triangle')
    } 
    if ((a == b) && (a != c) || (a == c) && (a != b) || (b == c) && (b != a)) {
        console.log('Isoccel Triangle')
    }
    if ((a == b) && (a == c)) {
        console.log('Equilateral Triangle')
    }
}


trianglesType(4, 3, 2)
trianglesType(4, 2, 2)
trianglesType(4, 4, 4)
