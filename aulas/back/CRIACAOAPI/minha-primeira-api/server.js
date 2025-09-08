//Importação do Express
const express = require('express');

//Criar a aplicação
const app = express();

//Permitir trabalhar com JSON
app.use(express.json());


//Porta onde a API vai rodar
const PORT = 3001;

//Inicia o servidor
app.listen(PORT,() => {
    console.log(`Servidor rodando na porta ${PORT}`);
})

let usuarios = [
    {id: 1, nome: "Ana", idade: 25},
    {id: 2, nome: "Carlos", idade: 30},
    {id: 3, nome: "Maria", idade: 22},
    {id: 4, nome: "Marcos", idade: 18}
]

app.get('/',(require, response) => {
    response.send("TESTE")
})

app.get('/usuarios',(require, response) => {
    response.json(usuarios);
})

