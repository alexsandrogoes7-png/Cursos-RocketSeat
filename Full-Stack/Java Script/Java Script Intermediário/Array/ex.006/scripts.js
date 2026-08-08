let myArray = [
    "Um texto",
    10,
    true,
    function(){
        console.log("Uma função dentro do Array")
    },
    {
        name: "Alex",
        email: "alexsandrogoes7@gmail.com"
    }
]

//Texto
console.log(myArray[0])

//Númerp
console.log(myArray[1])

//Boolean
console.log(myArray[2])

//Function
myArray[3]()

//Objeto
console.log(myArray[4].name)

//Objeto
console.log(myArray[4].email)