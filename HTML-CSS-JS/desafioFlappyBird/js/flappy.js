const div = document.querySelector("div")
let coluna = document.querySelectorAll("[coluna]")
const borda = document.querySelectorAll("[borda]")
const novaDivPai = document.createElement('div')
const novaDivFilho = document.createElement('div')




function deslocarColunasDireita() {
    coluna.forEach(e => e.style.right = "18%")
}



	//função criar div cima
	function criarDivCima() {
	novaDivPai.className = 'coluna-cima'
	novaDivPai.setAttribute('coluna', '')
	novaDivFilho.className = 'borda-coluna-cima'
	deslocarColunasDireita()
	div.appendChild(novaDivPai)
	novaDivPai.appendChild(novaDivFilho)
	}




div.onclick = e => {


    //Inicio
    deslocarColunasDireita()
	

	

    //Mecanica
    setInterval(function() { 
	
 
		coluna.forEach(e => {

		//Movimento das colunas
        let rightNumerico = parseInt(e.style.right)
        rightNumerico += 5
        e.style.right = `${rightNumerico}%`
	
		//desaparecimento e surgimento de colunas
		if (rightNumerico > 75) {
			e.remove()
		}
		
		if (rightNumerico == 53) {
			criarDivCima()
			
			}
	
		console.log(rightNumerico)
			}
		)       
		}
		, 300)
}   
