let date = new Date("2024-07-02T14:30:15")

//Exibe data e hora no formato local
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())

//Exibe data e hora no formato escolhido
console.log(date.toLocaleDateString("en"))
console.log(date.toLocaleTimeString("en"))