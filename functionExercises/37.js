/* 37) ​ Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que 
recebam como parâmetros um número n (número de termos), ​ a1 ​ (o primeiro termo) e ​ r ​ (a razão) 
e escreva os ​ n ​ termos , bem como a soma dos elementos. */

let n;
let a1;
let aNext;
let r;
let ap = [];
let gp = [];
let sumAp = 0;
let sumGp = 0;

function calcAp (a1, r, n) {

    for (i = 0; i < n; i++) {
        aNext = a1 + (i*r)
        ap.push(aNext)
    }
    for (i = 0; i < ap.length; i++) {
        sumAp += ap[i]
    }
    console.log(ap)
    console.log("AP sum:", sumAp)
}

function calcGp (a1, r, n) {
    
    gp.push(a1);
    for (i = 1; i <= n; i++) {
        aNext = a1 * (i* r)
        gp.push(aNext);
    }
    for (i = 0; i < ap.length; i++) {
        sumGp += gp[i]
    }
    console.log(gp)
    console.log("GP sum is:", sumGp)
}



calcAp(2, 4, 6)
calcGp(2, 4, 6)