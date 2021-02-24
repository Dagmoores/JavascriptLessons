  
/*
20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function requiredNotes (value) {
    let x1 = value / 100
    let x2 = x1 / 50
    let x3 = x2 / 10
    let x4 = x3 / 5
    let x5 = x4 / 1
    if ((value % 100) > 0) {
        if ((x2 % 50 > 0)) {
            if ((x3 % 10 > 0)) {
                if ((x4 % 5 > 0)) {
                }
            }
        }
    }
    console.log('Here is your change', Math.trunc(x1), Math.trunc(x2), Math.trunc(x3), Math.trunc(x4),Math.trunc(x5))
    }
    
    requiredNotes(375)
