const product = {
    name: "Teclado Mecânico",
    price: 350,
    category: "Periféricos",
    stock: 12
}

const {name} = product
const {price} = product
const {category} = product
const {stock} = product
console.log(name)
console.log(price)
console.log(category)
console.log(stock)


function showProduct({name,price,category,stock}){
    console.log(name)
    console.log(price)
    console.log(category)
    console.log(stock)
}
console.log("")
console.log("")
showProduct(product)



const features = [
    "RGB",
    "USB-C",
    "Switch Azul",
    "ABNT2",
    "Teclas multimídia"
]

function showFeature(...rest){
    console.log("Quantidade:", rest.length)
    showFeatures("RGB", "USB-C", "Switch Azul")
}

showFeature("RGB", "USB-C", "Switch Azul")