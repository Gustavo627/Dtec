/*//Criação de objeto
const pessoa = {
    nome: "Maria",
    sobrenome: "Xavier",
    idade: 50
}

//Acessando atributos
console.log(pessoa.nome)
console.log(pessoa.sobrenome)
console.log(pessoa.idade)

//FUNÇÃO FÁBRICA
function criarPessoas(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa2 = criarPessoas("Maria", "Silva", 25)
const pessoa3 = criarPessoas("João", "Roberto", 20)
console.log(pessoa2.nome)
console.log(pessoa3.idade)
*/

function criarCachorro (nome, idade) {
    return {
        nome,
        idade,

        aniversario() {
            this.idade += 1
        }
    }
}

const cachorro1 = criarCachorro("Bob", 8)
console.log(cachorro1.idade)
cachorro1.aniversario()
console.log(cachorro1.idade)