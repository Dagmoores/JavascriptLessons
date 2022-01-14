const div = document.querySelector("div")
const novaDivPaiCima = document.createElement('div')
const novaDivPaiBaixo = document.createElement('div')
const novaDivPaiCima2 = document.createElement('div')
const novaDivPaiBaixo2 = document.createElement('div')
const novaDivFilhoCima = document.createElement('div')
const novaDivFilhoBaixo = document.createElement('div')
const novaDivFilhoCima2 = document.createElement('div')
const novaDivFilhoBaixo2 = document.createElement('div')




//função selecionar colunas
function selecionar() {
    const coluna = document.querySelectorAll("[coluna]")
    return coluna
}

//função para deslocar colunas à direita
function deslocarColunasDireita(e) {
    e.forEach(e => e.style.right = "18%")
}


//função para criar coluna 1
function criarColuna1() {
    //fazendo append do filho na div Pai
	novaDivPaiCima.appendChild(novaDivFilhoCima)
	novaDivPaiBaixo.appendChild(novaDivFilhoBaixo)

    //atribuindo classe e atributo personalizado para divs cima
	novaDivPaiCima.className = 'coluna-cima'
	novaDivFilhoCima.className = 'borda-coluna-cima'
	novaDivPaiCima.setAttribute('coluna', '')
    novaDivPaiCima.setAttribute('coluna1', '')
	div.appendChild(novaDivPaiCima)
	
	//atribuindo classe e atributo personalizado para divs baixo
	novaDivPaiBaixo.className = 'coluna-baixo'
	novaDivFilhoBaixo.className = 'borda-coluna-baixo'
	novaDivPaiBaixo.setAttribute('coluna', '')
    novaDivPaiBaixo.setAttribute('coluna1', '')
	div.appendChild(novaDivPaiBaixo)
	
	//atribuindo selecao de nova coluna a constante
	const novaColuna = document.querySelectorAll('[coluna1]')
	
	//Deslocando nova coluna para a direita
     deslocarColunasDireita([...novaColuna])
}


//função para criar coluna 2
function criarColuna2() {
    //fazendo append do filho na div Pai
	novaDivPaiCima2.appendChild(novaDivFilhoCima2)
	novaDivPaiBaixo2.appendChild(novaDivFilhoBaixo2)

    //atribuindo classe e atributo personalizado para divs cima
	novaDivPaiCima2.className = 'coluna-cima'
	novaDivFilhoCima2.className = 'borda-coluna-cima'
	novaDivPaiCima2.setAttribute('coluna', '')
    novaDivPaiCima2.setAttribute('coluna2', '')
	div.appendChild(novaDivPaiCima2)
	
	//atribuindo classe e atributo personalizado para divs baixo
	novaDivPaiBaixo2.className = 'coluna-baixo'
	novaDivFilhoBaixo2.className = 'borda-coluna-baixo'
	novaDivPaiBaixo2.setAttribute('coluna', '')
    novaDivPaiBaixo2.setAttribute('coluna2', '')
	div.appendChild(novaDivPaiBaixo2)
	
	//atribuindo selecao de nova coluna a constante
	const novaColuna = document.querySelectorAll('[coluna2]')
	
	//Deslocando nova coluna para a direita
     deslocarColunasDireita([...novaColuna])
}


div.onclick = e => {


    //Inicio - Deslocando colunas à direita
    deslocarColunasDireita(selecionar())
	
	
    //Mecanica 
		setInterval(function() { 
	
		[...selecionar()].forEach(e => {
			
		
		//Movimento das colunas
        let rightNumerico = parseInt(e.style.right)
        rightNumerico += 3
        e.style.right = `${rightNumerico}%`
		
		
		//criar colunas ao chegar em right 51
        if (rightNumerico == 51 ) {
				
			
			if(document.querySelector('[coluna1]') == null) {
				
            //Criando nova coluna 
            criarColuna1() 	
			} else if (document.querySelector('[coluna]') != null) {
				criarColuna2()
			}
				
		} 
		
		
		//destruir colunas ao chegar em right 70
		if (parseInt(document.querySelector('[coluna]').style.right) >= 78) {
			
			document.querySelector('[coluna]').remove()	
		}
		
			
		
			}
		)       
		}
		, 300)
}   
