const div = document.querySelector("div")
const coluna = document.querySelectorAll("[coluna]")
const borda = document.querySelectorAll("[borda]")
const criarNovaDiv = document.createElement('div')
const colunaCima = criarNovaDiv.className = "coluna-cima"
const inserirElementoFilho = div.appendChild("colunaCima")




function iniciar() {
    coluna.forEach(e => e.style.right = "18%")
}

/*
function checarPosicao(e) {
    let rightNumerico = parseInt(e.style.right)
    if (rightNumerico > 70) {
        e.style.right = "18%"      
    }
} 
*/



div.onclick = e => {


    //Inicio
    iniciar()
    //Fim-do-Inicio

    //Mecanica
    setInterval(function() { 

    // coluna.forEach(e => checarPosicao(e))

    coluna.forEach(e => {

        let rightNumerico = parseInt(e.style.right)
        rightNumerico += 5
        e.style.right = `${rightNumerico}%`

        }
        )       
    }
    , 100)
}   
