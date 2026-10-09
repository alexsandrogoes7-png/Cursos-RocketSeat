//for...of itera sobre valores de um objeto iterável.

let students = ["Rodrigo","Amanda","John"]

for (let student of students){
    console.log(student)
}

let user = [
    {
        name:"Rodirgo",
        email:"rodrigo@email.com",
    }
]

for (let value of user){
    console.log(value.email)
}