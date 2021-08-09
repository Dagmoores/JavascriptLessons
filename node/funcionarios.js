const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')




axios.get(url).then(response => {
    const funcionarios = response.data
    
    funcionariosChinaFemale = funcionarios.filter(e => e.pais == 'China' && e.genero == 'F')
    
    result = funcionariosChinaFemale.reduce((p, c) => p.salario > c.salario ? c : p)

    console.log(result)
})

