const inputQuantidade = document.querySelector("#input-quantidade")
const inputInicio = document.querySelector("#input-inicio")
const inputFim = document.querySelector("#input-fim")

const naoRepetir = document.querySelector("#nao-repetir")
const botaoSortear = document.querySelector("#btn-sortear")


botaoSortear.addEventListener("click", () => {



    const quantidade = Number(inputQuantidade.value)
    const inicio = Number(inputInicio.value)
    const fim = Number(inputFim.value)

    

    if (quantidade <= 0) {
        alert("Digite uma quantidade válida de números.")
        return
    }

    if (inicio >= fim) {
        alert("O número inicial deve ser menor que o número final.")
        return
    }

    if (naoRepetir.checked && quantidade > (fim - inicio + 1)) {
        alert("A quantidade de números não pode ser maior que o intervalo.")
        return
    }




    const numeros = []

    while (numeros.length < quantidade) {

        const numeroAleatorio = Math.floor(
            Math.random() * (fim - inicio + 1)
        ) + inicio



        if(naoRepetir.checked){
            if(!numeros.includes(numeroAleatorio)){
                numeros.push(numeroAleatorio)
            }

        }else{
            numeros.push(numeroAleatorio)
        }
    }



    console.log(numeros)

})