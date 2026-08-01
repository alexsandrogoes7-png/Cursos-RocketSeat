// Objeto:
//     -Uma coleção de dados e/ou funcionalidades;
//     -Podem ter propriedades e métodos;


//Criar objeto vazio.

const obj = {}

console.log(obj)

console.log(typeof obj)

// Criar um ojeto com propriedades e métodos
const user = {
    email: "rodrigo@email.com",
    age: 23,
    name: {
        firstName: "Rodrigo",
        surname: "Gonçalves",
    },
    address:{
        street: "Rua X",
        number: 23,
        city: "São Paulo",
        postal_code: "123456-123"
    },
    message: function(){
        console.log("Oi Rodrigo")
    },
}

console.log(user)

//Acessando propriedades e métodos usando a notação de ponto.

console.log(user.email)

//Acessando propriedades de objetos.
console.log(user.name.firstName)

//Executa método do objeto.
user.message()

//Notação de colchetes
console.log(user["email"])
console.log(user["name"]["firstName"])

user["message"]()