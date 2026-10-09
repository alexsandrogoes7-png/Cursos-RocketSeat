//Utilizando o fetch com o then

// fetch("http://localhost:3000/products").then((response)=>response.json()).then((data)=>console.log(data))

//Utilizando o fetch com async/await.

async function fetchProduct(){
    const response = await fetch("http://localhost:3000/products")
    const data = await response.json()
    console.log(data)
}

async function fetchProductById(id){
    const response = await fetch(`http://localhost:3000/products/${id}`)
    const data = await response.json()
    console.log(data)
}

// fetchProduct()
// fetchProductById("3")

const productName = document.getElementById("name")
const productPrice = document.getElementById("price")
const form = document.getElementsByTagName("form")

addEventListener("submit",async(event)=>{
    event.preventDefault()
    
    fetch("http://localhost:3000/products",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            id:new Date().getTime().toString(),
            name: productName.value,
            price: productPrice.value,
        }),
    })

    await fetchProduct()
})