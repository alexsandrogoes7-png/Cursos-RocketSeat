let date = new Date("2024-07-02T14:30:15")

console.log(date.toLocaleDateString())
console.log(date.toLocaleDateString("en"))

//Exibe a data e hora e styles diferentes
console.log(date.toLocaleDateString("pt-BR",{
    dateStyle:"short",
})
)

console.log(date.toLocaleDateString("pt-BR",{
    dateStyle:"long",
})
)

console.log(date.toLocaleDateString("pt-BR",{
    dateStyle:"medium",
})
)

console.log(date.toLocaleDateString("pt-BR",{
    dateStyle:"full",
})
)

console.log(date.toLocaleDateString("pt-BR",{
    day:"2-digit",
    month:"2-digit",
    hour:"2-digit",
    minute:"2-digit",
})
)

let amount = 12.5

console.log(
    amount.toLocaleString("pt-BR",{
        style:"currency",
        currency:"BRL",
    })
)