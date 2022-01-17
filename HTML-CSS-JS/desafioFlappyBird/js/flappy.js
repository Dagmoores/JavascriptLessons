const div = document.querySelector("div")

const novaDivPaiCima1 = document.createElement('div')
const novaDivFilhoCima1 = document.createElement('div')
const novaDivPaiBaixo1 = document.createElement('div')
const novaDivFilhoBaixo1 = document.createElement('div')

const novaDivPaiCima2 = document.createElement('div')
const novaDivFilhoCima2 = document.createElement('div')
const novaDivPaiBaixo2 = document.createElement('div')
const novaDivFilhoBaixo2 = document.createElement('div')

const novaDivPaiCima3 = document.createElement('div')
const novaDivFilhoCima3 = document.createElement('div')
const novaDivPaiBaixo3 = document.createElement('div')
const novaDivFilhoBaixo3 = document.createElement('div')


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
	novaDivPaiCima1.appendChild(novaDivFilhoCima1)
	novaDivPaiBaixo1.appendChild(novaDivFilhoBaixo1)

    //atribuindo classe e atributo personalizado para divs cima
	novaDivPaiCima1.className = 'coluna-cima'
	novaDivFilhoCima1.className = 'borda-coluna-cima'
	novaDivPaiCima1.setAttribute('coluna', '')
    novaDivPaiCima1.setAttribute('coluna1', '')
	div.appendChild(novaDivPaiCima1)
	
	//atribuindo classe e atributo personalizado para divs baixo
	novaDivPaiBaixo1.className = 'coluna-baixo'
	novaDivFilhoBaixo1.className = 'borda-coluna-baixo'
	novaDivPaiBaixo1.setAttribute('coluna', '')
    novaDivPaiBaixo1.setAttribute('coluna1', '')
	div.appendChild(novaDivPaiBaixo1)
	
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


//função para criar coluna 3
function criarColuna3() {
    //fazendo append do filho na div Pai
	novaDivPaiCima3.appendChild(novaDivFilhoCima3)
	novaDivPaiBaixo3.appendChild(novaDivFilhoBaixo3)

    //atribuindo classe e atributo personalizado para divs cima
	novaDivPaiCima3.className = 'coluna-cima'
	novaDivFilhoCima3.className = 'borda-coluna-cima'
	novaDivPaiCima3.setAttribute('coluna', '')
    novaDivPaiCima3.setAttribute('coluna3', '')
	div.appendChild(novaDivPaiCima3)
	
	//atribuindo classe e atributo personalizado para divs baixo
	novaDivPaiBaixo3.className = 'coluna-baixo'
	novaDivFilhoBaixo3.className = 'borda-coluna-baixo'
	novaDivPaiBaixo3.setAttribute('coluna', '')
    novaDivPaiBaixo3.setAttribute('coluna3', '')
	div.appendChild(novaDivPaiBaixo3)
	
	//atribuindo selecao de nova coluna a constante
	const novaColuna = document.querySelectorAll('[coluna3]')
	
	//Deslocando nova coluna para a direita
     deslocarColunasDireita([...novaColuna])
}




//Mecanica Movimento das colunas
div.onclick = e => {


    //Inicio - Deslocando colunas à direita
    deslocarColunasDireita(selecionar())
	
	
     
		setInterval(function() { 
	
		[...selecionar()].forEach(e => {
			
		
		//Movimento das colunas
        let rightNumerico = parseInt(e.style.right)
        rightNumerico += 3
        e.style.right = `${rightNumerico}%`
		
		
		//criar colunas ao chegar em right 51
        if (rightNumerico == 48 ) {
				
			
			if(document.querySelector('[coluna1]') == null) {
				
            //Criando nova coluna 
            criarColuna1() 	
			
			} else if (document.querySelector('[coluna2]') == null) {
				criarColuna2()
			} else if (document.querySelector('[coluna3]') == null) {
					criarColuna3()
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


//Mecanica Movimento do passaro
function movimentoPassaro() {
	
	document.addEventListener("click", 
	
}

