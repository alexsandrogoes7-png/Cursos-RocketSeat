const products = [
  { id: 1, name: "Teclado", price: 150, stock: 10, promotion: true },
  { id: 2, name: "Mouse", price: 80, stock: 0, promotion: false },
  { id: 3, name: "Monitor", price: 900, stock: 5, promotion: true },
  { id: 4, name: "Headset", price: 250, stock: 3, promotion: false },
  { id: 5, name: "Webcam", price: 300, stock: 8, promotion: true }
]

//Ex.001
const productNames = products.map((product)=>{
    return(product.name)
    
})
console.log(productNames)

//Ex.002
const formattedProducts = products.map((product)=>{
    return ({name: product.name,
        price: product.price
    })
})

console.log(formattedProducts)

//Ex.003 ENCADEAMENTO DE MÉTODOS !!!!                                Abstenção de parênteses
const promotions = products.filter((product)=>product.promotion).map(product=>product.name)

console.log(promotions)

//Ex.004 
const availableProducts = products.filter(product=>product.stock>0).map(product=>product.name)
console.log(availableProducts)

//Ex.005                    Não funciona porque .find() retorna objeto e .map() retorna array.
const monitor = products.find(product=>product.name === "Monitor")//.map(product=>product.name)
console.log(monitor.name)

//Ex.006
const headsetIndex = products.findIndex(product=>product.name === "Headset")
console.log(headsetIndex)

//Ex.007
const hasOutOfStock = products.some(product=>product.stock === 0)
console.log(hasOutOfStock)

console.log("Ex.008")
const checkPriceCondition = (product)=>{
    product.price > 50
    return
}
const allAbove50 = products.every(checkPriceCondition)
console.log(allAbove50)

//Ex.009
// const totalPrice = products.reduce((accumulator,product)=>{
//     return accumulator+product.price
// },0)

const totalPrice = products.reduce(function(accumulator,product){
    return accumulator + product.price
},0)
console.log(totalPrice)

//Ex.010
const totalStock = products.reduce((accumulator,product)=>accumulator+product.stock,0)

console.log(totalStock)


console.log("#################")
console.log("Exercício Extra")
console.log("#################")
console.log("Relatório da Loja")

const availablePromotions = products.filter(product=>product.promotion).map(product=>product.name)
console.log("Produtos em Promoção: ",availablePromotions)

const hasExpensiveProduct = products.some(product=>product.price > 500)
const nameExpensiveProduct = products.find(product=>product.price > 500)

let resposta;

//Arrow Fuction 
const checkResposta = ()=>{
    if(hasExpensiveProduct === false){
        return resposta = "Sim"
    }
    return resposta = "Não"
}
checkResposta()
// const resposta = hasExpensiveProduct ? "Sim":"Não"
console.log("Exite produto com valor maior que 500 ?",  resposta," é o ",nameExpensiveProduct.name)

//Produtos em promoção
const promotionTotal = products
    
    .filter(product=>product.promotion)
    .reduce((accumulator, product)=>{
        
       return accumulator + product.price
    },0)

console.log("O valor total de produtos em promoção é ",promotionTotal)
