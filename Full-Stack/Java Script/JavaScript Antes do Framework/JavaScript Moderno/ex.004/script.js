//Rest params (...) permite representar um número indefinido de argumentos como um array.


function values (...rest){
    console.log(rest.length)
    console.log(...rest)
    console.log(rest)
}

values (1,2,3,4,5,6)