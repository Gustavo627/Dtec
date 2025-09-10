//Importação do Express
const express = require('express');
//Importação do cors
const cors = require('cors');

//Criar a aplicação
const app = express();

//Permitir trabalhar com JSON
app.use(express.json());

//Porta onde a API vai rodar
const PORT = 3000;

//Inicia o servidor
app.listen(PORT,() => {
    console.log(`Servidor rodando na porta ${PORT}`);
})

let usuarios = [
    {id: 1, nome: "Ana", idade: 25},
    {id: 2, nome: "Carlos", idade: 30},
    {id: 3, nome: "Maria", idade: 22},
    {id: 4, nome: "Marcos", idade: 18},
    {id: 5, nome: "Ana Júlia", idade: 15}
]

app.get('/',(require, response) => {
    response.send("TESTE")
})

app.get('/usuarios',(request, response) =>{
    response.json(usuarios);
})


app.get('/usuarios/:id', (request, res) =>{
    const id = request.params.id
    const usuario = usuarios.find(u => u.id == id)

    if(usuario){
        res.json(usuario)
    }else{
        res.status(404).json({mensagem: "Usuário não encontrado"})
    }
})

app.get('/usuarios/nome/:nome', (req, res) => {
    const buscaNome = req.params.nome.toLowerCase();
    const resultados = usuarios.filter(u => u.nome.toLowerCase().includes(buscaNome));
    if(resultados.length > 0){
        res.json(resultados);
    }else{
        res.status(404).json({mensagem: "Usuário não encontrado"})
    }

})

app.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id
    usuarios = usuarios.filter(u => u.id != id);

    res.json({mensagem: "Usuário removido com sucesso"})
})

app.post('/usuarios', (req, res) => {
    const novoUsuario = {
        id: usuarios.length + 1,
        nome: req.body.nome,
        idade: req.body.idade
    };

    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario)
})