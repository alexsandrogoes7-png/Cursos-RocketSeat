const inputQuantidade = document.querySelector("#input-quantidade")
const inputInicio = document.querySelector("#input-inicio")
const inputFim = document.querySelector("#input-fim")

const naoRepetir = document.querySelector("#nao-repetir")
const botaoSortear = document.querySelector("#btn-sortear")


botaoSortear.addEventListener("click", () => {

    // 1. PEGAR OS VALORES

    const quantidade = Number(inputQuantidade.value)
    const inicio = Number(inputInicio.value)
    const fim = Number(inputFim.value)

    // 2. VALIDAR

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


    // 3. GERAR NÚMEROS

    const numeros = []

    while (numeros.length < quantidade) {

        const numeroAleatorio = Math.floor(
            Math.random() * (fim - inicio + 1)
        ) + inicio


        // 4. GUARDAR NO ARRAY

        if (naoRepetir.checked) {

            if (!numeros.includes(numeroAleatorio)) {
                numeros.push(numeroAleatorio)
            }

        } else {

            numeros.push(numeroAleatorio)

        }
    }


    // 5. MOSTRAR RESULTADO

    console.log(numeros)

})