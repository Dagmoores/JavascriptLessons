/*
22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido
*/

function annuity (intMonth) {
    
    let result = (BasicAnnuity * Math.pow((1 + 0.05), intMonth))

    if (intMonth == 1) {
        return BasicAnnuity
    } else {
    return result.toFixed(2)
    }
}
    
    let BasicAnnuity = 1000
    let january = 1
    let february = 2
    let march = 3
    let april = 4
    let may = 5
    let june = 6
    let july = 7
    let august = 8
    let september = 9
    let october = 10
    let november = 11
    let december = 12
    
console.log(annuity(january))
console.log(annuity(february))
console.log(annuity(march))
console.log(annuity(april))
console.log(annuity(may))
console.log(annuity(june))
console.log(annuity(july))
console.log(annuity(august))
console.log(annuity(september))
console.log(annuity(october))
console.log(annuity(november))
console.log(annuity(december))
