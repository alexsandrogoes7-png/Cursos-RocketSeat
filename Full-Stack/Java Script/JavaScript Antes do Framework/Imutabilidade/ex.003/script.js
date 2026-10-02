//Shallow Freezing 
//Congelar um objeto para impedir a modificação dele.

const book = {
    title:"Objetos Imutáveis",
    category:"javascript",
    author:{
        name:"Rodrigo",
        email:"rodrigo@email.com"
    },
}

// //O JavaScript em si não impõe restrições à modificação de objetos.
// book.category = "HTML"

//Congela o objeto e impede a modificação
Object.freeze(book)
book.category = "CSS" //Não modifica


//O Object.freeze() não impede modificações profundas em objetos aninhados(shallow freezing).
book.author.name = "João"
console.log(book)