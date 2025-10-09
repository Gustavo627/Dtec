//Importa o dotenv no início para carregar variáveis
require('dotenv').config()
//Importação do Express
const express = require('express');
//Importação do cors
const cors = require('cors');
//Iniciar o  Mongoose pacote MONGODB
const mongoose= require('mongoose')

const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT || 3000   


mongoose.connect(mongoURI)
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((error) => console.error("Erro ao conectar ao MongoDB", err));

const usuarioSchema = new mongoose.Schema({
    nome: {type: String, reqired: true},
    idade: {type: Number, required: true}
}, {timestamps: true})

//Modelo collection
const Usuario = mongoose.model('Usuario', usuarioSchema);

//Criar a aplicação
const app = express();

//Permitir trabalhar com JSON
app.use(express.json());
//Permitir trabalhar com CORS
app.use(cors());

//Inicia o servidor
app.listen(PORT,() => {
    console.log(`Servidor rodando na porta ${PORT}`);
})

app.get('/',(require, response) => {
    response.send("TESTE")
})

app.get('/usuarios', async (request, response) =>{
    try{
        const usuarios = await Usuario.find({});
        response.json(usuarios)
    } catch (error) {
        response.status(500).json({mensagem: "Erro ao buscar usuários"})
    }
})


app.get('/usuarios/:id', async (request, res) =>{
    const id = request.params.id
    try{
        const id = request.params.id
        const usuario = await Usuario.findById(id);

        if(usuario){
            res.json(usuario)
        }else{
            res.status(404).json({mensagem: "Usuário não encontrado"})
        }
    } catch (error) {
        res.status(500).json({mensagem: "Erro de servidor", erro: error.message})
    }
})

app.get('/usuarios/nome/:nome', async (req, res) => {
    try{
        const buscaNome = req.params.nome
        const resultados = await Usuario.find({
            nome: { $regex: buscaNome, $options: 'i'}
        });
        if(resultados > 0){
            res.json(resultados);
        }else{
            res.status(404).json({mensagem: "Nenhum usuário encontrado com esse nome"})
        }
    }catch(error) {
        console.error("Erro na busca", error);
        res.status(500).json({mensagem: "Erro no servidor", erro: error.message}) 
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

app.put('/usuarios/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const usuarioDeletado = await Usuario.findByIdAndUpdate(id);

        if(usuarioDeletado){
            return res.status(404).json({mensagem: "Usuário não encontrado"})
        }
        res.json({mensagem: "Usuário deletado.", usuario: usuarioDeletado})
    }catch (error) {
        res.status(400).json({mensagem: "Erro ao deletar", erro: error.message})
    }
})

app.get('/usuarios/idade/:idade', async (req, res) => {
    try{
        const buscaIdade = req.params.idade
        const resultados = await Usuario.find({
            nome: { $regex: buscaNome, $options: 'i'}
        });
        if(resultados > 0){
            res.json(resultados);
        }else{
            res.status(404).json({mensagem: "Nenhum usuário encontrado com esse nome"})
        }
    }catch(error) {
        console.error("Erro na busca", error);
        res.status(500).json({mensagem: "Erro no servidor", erro: error.message}) 
    }
})

