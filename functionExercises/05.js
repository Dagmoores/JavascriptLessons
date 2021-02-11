/*
05)Lidar com números em JavaScript pode dar muita dor de cabeça Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
*/



//Solution 1
console.log(0.1 + 0.2)

function PointAndComma(x){ 
    if (x == 0.1 + 0.2) {
       console.log(`R$0,30`)
    } else {console.log('something is wrong')}
}

PointAndComma(0.1 + 0.2)
PointAndComma(0.1 + 0.5)



//Solution 2
function ToBrazilianFormat (a, b) {
    result = a + b
    console.log('R$', result.toFixed(2).toString().replace('.', ','))
}

ToBrazilianFormat(0.1, 0.2)
