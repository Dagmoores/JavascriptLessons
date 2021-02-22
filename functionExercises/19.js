/*
19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente
*/

function foodPaymentCalculator (code) {
    let amount >= 1
    switch (code) {
        case 100: 
           if (amount = 1) {
                console.log('Here it is your hot dog. The price is:', 13.00 * amount)
           }
            break;
        case 200:
            console.log(4.00 * amount)
            break;
        case 300:
            console.log(5.50 * amount)
            break;
        case 400:
            console.log(7.50 * amount)
            break;
        case 500:
            console.log(3.50 * amount)
            break;
        case 600:
            console.log(2.80 * amount)
            break;
        default: 
            console.log ('Invalid Item')
    }
} 
