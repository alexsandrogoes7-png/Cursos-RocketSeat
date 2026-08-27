const inputQuantidade = document.querySelector("#input-quantidade")
const inputInicio = document.querySelector("#input-inicio")
const inputFim = document.querySelector("#input-fim")

const naoRepetir = document.querySelector("#nao-repetir")
const botaoSortear = document.querySelector("#btn-sortear")

botaoSortear.addEventListener("click",() =>{

    //Pegar valores

    const quantidade = Number(inputQuantidade.value)
    const inicio = Number(inputInicio.value)
    const fim = Number(inputFim.value)

    
    console.log(quantidade)
    console.log(inicio)
    console.log(fim)


})