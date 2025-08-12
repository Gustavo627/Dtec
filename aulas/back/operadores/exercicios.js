const idade = prompt("Digite sua idade: ");

while (idade != Number) {

const idade = prompt("Digite sua idade: "); 

    if (idade <= 0 && idade >= 12) {
        alert("Criança.")
    } else if (idade <= 13 && idade >= 17) {
        alert("Adolescente.")
    } else if (idade <= 18 && idade >= 59) {
        alert("Adulto.")
    } else if (idade >= 60) {
        alert("Idoso.")
    } else {
        alert("Inválido, digite novamente.")
    }
} 