const div = document.querySelector("div")
const novaDivPai = document.createElement('div')
const novaDivPai2 = document.createElement('div')
const novaDivFilho = document.createElement('div')





//função selecionar colunas
function selecionar() {
    const coluna = document.querySelectorAll("[coluna]")
    return coluna
}

//função para deslocar colunas à direita
function deslocarColunasDireita(e) {
    e.forEach(e => e.style.right = "18%")
}


//função para criar div cima
function criarColuna1() {

    //fazendo append do filho na div Pai
	novaDivPai.appendChild(novaDivFilho)

    //atribuindo classe e atributo personalizado para divs cima
	novaDivPai.className = 'coluna-cima'
	novaDivFilho.className = 'borda-coluna-cima'
	novaDivPai.setAttribute('coluna', '')
    novaDivPai.setAttribute('coluna1', '')
	div.appendChild(novaDivPai)
	
	//atribuindo selecao de nova coluna a constante
	const novaColuna = document.querySelector('[coluna1]')
	
	//Deslocando nova coluna para a direita
     deslocarColunasDireita([novaColuna])
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
		
		
        if (rightNumerico == 42 ) {
				
			
			if(document.querySelector('[coluna1]') == null) {
            //Criando nova coluna 
            criarColuna1() 
			

			
			} else {}
				
		} 
		

		
			}
		)       
		}
		, 300)
}   
