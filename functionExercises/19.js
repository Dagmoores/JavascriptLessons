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

function foodPaymentCalculator (code, amount) {
    if (amount >= 1) {
    switch (code) {
        case 100: 
           if (amount == 1) {
                console.log("Here it is your hot dog. The price is:", (13.00 * amount).toFixed(2), "reais")
           } else {
               console.log("Here are your hot dogs, the price is:", (13.00 * amount).toFixed(2), "reais" )
           }
            break;
        case 200:
            if (amount == 1) {
                console.log("Here it is your simple hamburger. The price is:", (4.00 * amount).toFixed(2), "reais")
           } else {
               console.log("Here are your simple hamburgers, the price is:", (4.00 * amount).toFixed(2), "reais" )
           }
            break;
        case 300:
             if (amount == 1) {
                console.log("Here it is your refrigerant. The price is:", (5.50 * amount).toFixed(2), "reais")
           } else {
               console.log("Here are your cheeseburgers, the price is:", (5.50 * amount).toFixed(2), "reais" )
           }
            break;
        case 400:
            if (amount == 1) {
                console.log("Here it is your bauru. The price is:", (7.50 * amount).toFixed(2), "reais")
           } else {
               console.log("Here are your simple baurus, the price is:", (7.50 * amount).toFixed(2), "reais" )
           }
            break;
        case 500:
             if (amount == 1) {
                console.log("Here it is your soft drink. The price is:", (3.50 * amount).toFixed(2), "reais")
           } else {
               console.log("Here are your soft drinks, the price is:", (3.50 * amount).toFixed(2), "reais" )
           }
            break;
        case 600:
                if (amount == 1) {
                console.log("Here it is your juice. The price is:", (2.80 * amount).toFixed(2), "reais")
           } else {
               console.log("Here are your juices, the price is:", (2.80 * amount).toFixed(2), "reais" )
           }
            break;
        default: 
            console.log ('Invalid Item')
        }
    } else {console.log("Can't do this")
}
}

foodPaymentCalculator(100, 1)
foodPaymentCalculator(100, 3)
foodPaymentCalculator(200, 1)
foodPaymentCalculator(200, 7)
foodPaymentCalculator(300, 1)
foodPaymentCalculator(300, 4)
foodPaymentCalculator(400, 1)
foodPaymentCalculator(400, 3)
foodPaymentCalculator(500, 1)
foodPaymentCalculator(500, 12)
foodPaymentCalculator(600, 1)
foodPaymentCalculator(600, 3)
foodPaymentCalculator(700, 3)
foodPaymentCalculator(700, 0)
foodPaymentCalculator(300, -1)
