//OPERADOR TERNÁRIO
const pontos = 100
if(pontos>=1000) {
    console.log("Você é vip.")
} else {
    console.log("Você é comum.")
}

//VARIÁVEL                 CONDIÇÃO     TRUE    FALSE
const statusCliente = pontos >= 1000 ? "VIP" : "COMUM";
console.log(statusCliente)
