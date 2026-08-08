//While: executa a repetição até a condição seja verdadeira.

let execute = true

// while (execute === true){

// }

 while (execute){
    let reponse = window.prompt("Deseja continuar: 1 (SIM) ou 2 (NÃO)")

    if(reponse === "2"){
        execute = false
    }
 }

 console.log("Segue o fluxo...")