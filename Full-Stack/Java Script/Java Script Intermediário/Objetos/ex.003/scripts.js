const products ={
    name: "teclado",
    quantity: 100,
}

//Atualiza o valor de uma propriedade.
console.log(products.quantity)
products.quantity = 90
console.log(products.quantity)

console.log(products.name)
products.name = "Mouse"
console.log(products.name)

//Notação de colchetes.
products["quantity"] = 50
console.log(products)