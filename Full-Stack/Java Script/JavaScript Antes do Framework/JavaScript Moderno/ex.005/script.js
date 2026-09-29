//spread (espalhar) permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado em zero ou mais argumentos .

const numbers = [1,2,3]
console.log(numbers)

//SPREAD
console.log(...numbers)

const data = [
    {
        name:"Alex",
        idade:25,
        foto:"r-png"
    },
    {
        name:"Ana",
        idade:35,
        foto:"j-png"
    }
]

console.log(data)

//SPREAD
console.log(...data)