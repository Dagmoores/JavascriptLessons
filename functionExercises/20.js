 /*
20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function requiredNotes (x) {
    
    let x1 = x / 100
    let x1remainder = x % 100
    let x2 = x1remainder / 50
    let x2remainder = x1remainder % 50
    let x3 = x2remainder / 10
    let x3remainder = x2remainder % 10
    let x4 = (x3remainder) / 5
    let x4remainder = x3remainder % 5
    let x5 = (x4remainder) / 1


    
    if (Math.trunc(x1) > 0) {console.log(Math.trunc(x1), "note(s) of R$ 100")} 
    if (Math.trunc(x2) > 0) {console.log(Math.trunc(x2), "note(s) of 50")}
    if (Math.trunc(x3) > 0) {console.log(Math.trunc(x3), "note(s) of 10")}
    if (Math.trunc(x4) > 0) {console.log(Math.trunc(x4), "note(s) of 5")} 
    if (Math.trunc(x5) > 0) {console.log(Math.trunc(x5), "note(s) of 1")} 
    
}
    
requiredNotes(108)
