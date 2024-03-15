const list = document.querySelector("#list");

let endpoint = "https://rickandmortyapi.com/api/character"
/*
O async define que as funções fetchApi() e content() são assincronas e precisam esperar uma ação
O await na const apiResponse indica que o fetch pode demorar um pouco e que o código precisa "esperar"
o resultado da requisição do "fetch"
O .then() é executado casa a requisição funcione 
o .catch() é executado quando algo da errado com a requisição

.json() converte alguns dados obtidos pela requisição para o formato json
.text() converte alguns dados obtidos pela requisição para o formato de uma string
*/
const fetchApi = async (endpoint) => {
    const apiResponse = await fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        return data
    })
    .catch((error)=> {
        return error 
    }
    )
    return apiResponse
}


/* 
Função para manipular os dados obtidos pela função fetchApi()

Observações o parametro é opcional e depende muito da forma que deseja manipular os dados
*/
const content = async (endpoint) => {
    const res = await fetchApi(endpoint)
    const arr = res.results
    arr.forEach((item) => {
        list.innerHTML += 
        `
        <div class="characters">
            <p><strong>${item.id}</strong>. ${item.name}</p>
            <img src="${item.image}">
        </div>
        `
        console.log(item)
    })
    if (res.info.next != null) {
        endpoint = res.info.next
        content(endpoint)
    }
}
console.log(content(endpoint))
