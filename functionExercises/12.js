/*
12) Faça um algoritmo que calcule o fatorial de um número.
*/

function factorialCalc (x) {
    for (i = 1; i != x; i++){
        return console.log('o fatorial de', x, 'é', (i * i++)) 
    }
}

factorialCalc(5)
