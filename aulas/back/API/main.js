/*const listadeCompras = {
    "nome": "Lista de compras",
    "data": "21/08/2025",
    "itens": [
        {
            "item": "maçã",
            "quantidade": 5
        },
        {
            "item": "pão",
            "quantidade": 10
        }
    ]
}

console.log(listadeCompras.data)
console.log(listadeCompras.nome)
console.log(listadeCompras.itens[0].item)*/

/*const perfilUsuario = {
    "nome": "Ana",
    "data": "27/11/2007",
    "email": "poihççllxcmknj@gmail.com",
    "hobbies": [
        {
            "hobbie": "cozinhar",
            "dia": "segunda"
        },
        {
            "hobbie": "pintar",
            "dia": "terça"
        },
        {
            "hobbie": "artesanato",
            "dia": "quarta"
        },
        {
            "hobbie": "jogar",
            "dia": "quinta"
        },
        {
            "hobbie": "programar",
            "dia": "sexta"
        }
    ]
}

console.log(perfilUsuario.hobbies[1].dia)*/

/*const catalogo = {
    "livros": [
        {
            "titulo": "lkljh",
            "autor": "hehc4a",
            "ano": 2000,
            "disponivel": true
        },
        {
            "titulo": " zbvgfahjk",
            "autor": "nmbcv x",
            "ano": 2001,
            "disponivel": false
        },
        {
            "titulo": "lknecjhj",
            "autor": "bvc x",
            "ano": 2002,
            "disponivel": true
        }
    ]
}

console.log(catalogo.livros[1].disponivel)*/

//Método para fazer requisições
fetch("https://pokeapi.co/api/v2/pokemon/800")
.then(response => {
    return response.json()
})
.then(data => {
    console.log(data.name)
})