//Importa o dotenv no início para carregar variáveis
require('dotenv').config()
//Importação do Express
const express = require('express');
//Importação do cors
const cors = require('cors');
//Iniciar o  Mongoose pacote MONGODB
const mongoose= require('mongoose')

const mongoURI = process.env.MONGO_URI


mongoose.connect(mongoURI)
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((error) => console.error("Erro ao conectar ao MongoDB", err));
//Criar a aplicação
const app = express();

//Permitir trabalhar com JSON
app.use(express.json());
//Permitir trabalhar com CORS
app.use(cors());

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
    const ultimoID = usuarios.reduce(max, usuario => Math.max(max, usuario.id), 0);


    const novoUsuario = {
        id: usuarios.ultimoID + 1,
        nome: req.body.nome,
        idade: req.body.idade
    };

    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario)
})

app.put('/usuarios/:id', (req, res) => {
    const id = req.params.id
    const nome = req.body.nome
    const idade = req.body.idade

    const usuario = usuarios.find (u => u.id == id)

    if(!usuario) {
        return res.status(404).json({mensagem: "Usuário não encontrado"})
    }

    usuario.nome = nome || usuario.nome
    usuario.idade = idade || usuario.idade
    res.json(usuario)
})

app.get('/usuarios/idade/:idade', (req, res) => {
    const idade = req.params.idade
    const resultados = usuarios.filter(u => u.idade == idade)

    if(resultados.length > 0){
        res.json(resultados)
    }else{
        res.status(404).json({mensagem: "Nenhum usuário encontrado com essa idade"})
    }
})

