/* 38) ​ Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos 
os números ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início 
e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior 
antes do menor. */


let oddNumbers = [];

function calcOdd (first = 0, last = 100) {

    if (last < first) {
        let temp = first;
        first = last;
        last = temp;
    }

    for (i = first; i <= last; i++) {
        if (i % 2 != 0) {
            oddNumbers.push(i);
        }
    }
    console.log(oddNumbers);
    oddNumbers = [];
}



calcOdd();
calcOdd(101, 50);
calcOdd(10, 20);
