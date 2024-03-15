let endpoint = "https://rickandmortyapi.com/api/character/"

const fetchApi = async (endpoint) => {
  
    const apiResponse = await fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
        return data
    })
    .catch((error)=> {
        return error
    })
    return apiResponse
}

// Pega os dados obtidos pelo fetch
const content = async (endpoint) => {
   
    const res = await fetchApi(endpoint)
    
    //faz uma "lista" como o nome dos personagens
    const charactersObj = res.results
    const nextPage = res.info.next
    charactersObj.forEach(element => {
        console.log(element.id," : ",element.name)
    });
    // atualiza o endpoint puxando a próxima pagina de personagens
    if (nextPage != null) {
        endpoint = nextPage
        content(endpoint)
    }
}
console.log(content(endpoint))

