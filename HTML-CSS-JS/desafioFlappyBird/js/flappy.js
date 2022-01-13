const div = document.querySelector("div")
const coluna = document.querySelectorAll("[coluna]")
const borda = document.querySelectorAll("[borda]")
const novaDivPai = document.createElement('div')
const novaDivFilho = document.createElement('div')




function iniciar() {
    coluna.forEach(e => e.style.right = "18%")
}



	//função criar div cima
	function criarDivCima() {
	novaDivPai.className = 'coluna-cima'
	novaDivPai.setAttribute('coluna', '')
	div.appendChild(novaDivPai)
	novaDivPai.appendChild(novaDivFilho)
	novaDivFilho.className = 'borda-coluna-cima'
	}




div.onclick = e => {


    //Inicio
    iniciar()
	

	

    //Mecanica
    setInterval(function() { 

    // coluna.forEach(e => checarPosicao(e))

    coluna.forEach(e => {

		//Movimento das colunas
        let rightNumerico = parseInt(e.style.right)
        rightNumerico += 5
        e.style.right = `${rightNumerico}%`
	
		//desaparecimento e surgimento de colunas
		if (rightNumerico > 75) {
			e.style.display = "none"
		}
		
		if(rightNumerico == 53) {
			criarDivCima()
			
			
			}
	
		console.log(rightNumerico)
			}
		)       
		}
		, 300)
}   
