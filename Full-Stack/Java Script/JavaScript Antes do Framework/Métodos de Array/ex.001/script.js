//método map() chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada. E no final, retorna um novo array.


//Percorrendo itens do Array.
const produtos = ["Teclado","Mouse","Monitor"]

produtos.map((product)=>{
    console.log(product)
})
console.log('')

//Sintaxe reduzida.
produtos.map((product)=>console.log(product))
console.log('')

//Utilizando o novo objeto retornado
const formatted = produtos.map((product)=>{
    
    console.log(product.toUpperCase())

    return{
        id: Math.random(),
        description: product,
    }
})

console.log('')
console.log(formatted)