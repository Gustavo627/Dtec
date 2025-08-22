// 1. Mostre um alerta com o texto do <h1> ao clicar no botão "Alerta".

function mostrarAlerta(){
const h1 = document.querySelector('#titulo')
const conteudoH1 = h1.textContent

alert(conteudoH1)
}
// 2. Altere o texto do primeiro <p> para "Texto alterado" usando JS.

const p = document.querySelector(".texto")
p.textContent = "Texto alterado"

// 4.

function mudarTitulo(){
const textoH2 = document.querySelector("#titulo")
textoH2.textContent = "Título alterado"
}