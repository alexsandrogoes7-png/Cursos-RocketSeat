const user = {
    name: "Rodrigo",
    message: function(){
        console.log(`Olá ${user.name}`)
    }
}

user.message()  

const usuário = {
    name:"Alex",    
    email:"alexsandrogoes7@gmail.com",
    message: function(){
        console.log(`Olá ${this.email}`)
        console.log(`Olá ${this.name}`)
    }

}

usuário.message()