// O método reduce é utilizado para reduzir um array a um único visualViewport.addEventListener

// Parâmetros:
//     - Array original(values)
//     - Acumulador (accumulator)
//     - Valor da iteração(currentValue)
//     - Valor inicial(0)
//     - Index (Index da iteração atual - opcional)

const values = [1,2,3,4,5]

const sum = values.reduce((accumulator,currentValue,index)=>{
    console.log("ACUMULADOR: ",accumulator)
    console.log("CURRENT VALUE: ",currentValue)
    console.log("INDEX: ",index)

    console.log("SOMA: ",accumulator + currentValue)
    console.log("##########")

    return accumulator + currentValue
},0)

console.log("RESULTADO DA SOMA FINAL: ",sum)