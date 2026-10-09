//O método filter() cria um novo array com todos os elementos que passaram na condição.

const words = ["JavaScript","HTML","CSS","WEB"]

// const result = words.filter((word)=>{
//     return word.length>3
// })
// console.log(result)

//Sintaxe reduzida
const result = words.filter((word)=>word.length>3)
console.log(result)

const products = [
    {description: "Teclado",price:230,promotion:true},
    {description: "Mouse",price:200,promotion:false},
    {description: "Monitor",price:900,promotion:true},
]

//Exemplo de um filtro de produtos na promoção.


// const promotion = products.filter((product)=>product.promotion===true)
// console.log(promotion)

// const promotion = products.filter((product)=>product.price>100)
// console.log(promotion)

//Sintaxe reduzida
const promotion = products.filter((product)=>product.promotion)
console.log(promotion)