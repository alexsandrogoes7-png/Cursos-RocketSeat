//Desestruturação em objetos

const product = {
    description:"Teclado",
    price:"150",

}

const {description,price} = product

console.log("Descrição: ",description)
console.log("Preço R$",price)


//Dentro de funções
function newProduct ({description,price}){
   console.log("")
   console.log("### NOVO PRODUTO ###")
   console.log("Descrição: ",description)
console.log("Preço R$",price) 
}

newProduct({
    price:70,
    description:"Microondas",
})