const div = document.querySelector("div")
const novaDivPai = document.createElement('div')
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
function criarDivCima() {

    //criando divs cima e fazendo append 
    div.appendChild(novaDivPai)
	novaDivPai.appendChild(novaDivFilho)

    //atribuindo classe e atributo personalizado para divs cima
	novaDivPai.className = 'coluna-cima'
    novaDivPai.setAttribute('coluna', '')
    novaDivPai.setAttribute('nova', '')
	novaDivFilho.className = 'borda-coluna-cima'

    //retornando variavel para ser utilizada em outros escopos 
    return novaColuna = document.querySelector('[nova]')
}




div.onclick = e => {


    //Inicio - Deslocando colunas à direita
    deslocarColunasDireita(selecionar())
	
    //Mecanica 
    setInterval(function() { 
	
 
		[...selecionar()].forEach(e => {

		//Movimento das colunas
        let rightNumerico = parseInt(e.style.right)
        rightNumerico += 5
        e.style.right = `${rightNumerico}%`
	

        if (rightNumerico == 43) {

            //criando nova coluna e guardando valor em constante
            criarDivCima()   


            //Deslocando nova coluna para a direita
            deslocarColunasDireita([novaColuna])


            //removendo atributo 'nova' para que a coluna não seja reiniciada
            novaColuna.removeAttribute('nova')


            //novaColuna.removeAtribute('nova')

            

        
		}

	
		console.log(rightNumerico)
			}
		)       
		}
		, 300)
}   
