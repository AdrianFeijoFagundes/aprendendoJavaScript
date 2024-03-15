

let promessa = new Promise( (resolve , reject) => {
    let result = true
    let time = 1000
    setTimeout(() => {
        if (result) {
            resolve("Ok")
        } else {
            reject("Error")
        }
    },time)
})
promessa.then((ret) => { // A função .then() executa a promisse e aguarda uma resposta positiva 
    console.log(ret)
})

promessa.catch((ret) => { // A função .catch() executa a promisse e aguarda um erro
    console.log(ret)
})

console.log("Processando...")


const promessa2 = () => {
    let p = new Promise( (resolve , reject) => {
        let result = true
        let time = 2000
        setTimeout(() => {
            if (result) {
                resolve("Ok promessa2")
            } else {
                reject("Error promessa2")
            }
        },time)
    })   
    return p
}

promessa2()
    .then((ret) => { // A função .then() executa a promisse e aguarda uma resposta positiva 
    console.log(ret)
})
    .catch((ret) => { // A função .catch() executa a promisse e aguarda um erro
    console.log(ret)
})
