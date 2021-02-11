/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

//SimpleInterest
function simpleInterest (bankStock, interest, time) {
    result = bankStock + (bankStock * (interest * time))
    console.log(result.toFixed(2))
}

simpleInterest(1000, 0.1, 6)

//CompoundInterest
// M = C (1 + i)t
function compoundInterest (bankStock, interest, time) {
    result = bankStock * Math.pow((1 + interest), time)
    console.log(result.toFixed(2))
}

compoundInterest(1000, 0.1, 6)
