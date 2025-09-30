//Importação do Express
const express = require('express');
//Importação do cors
const cors = require('cors');

//Criar a aplicação
const app = express();

//Permitir trabalhar com JSON
app.use(express.json());
//Permitir trabalhar com CORS
app.use(cors());

//Porta onde a API vai rodar
const PORT = 3001;

//Inicia o servidor
app.listen(PORT,() => {
    console.log(`Servidor rodando na porta ${PORT}`);
})

let pedidos = [
    {id: 1, pedido: "Ana", preco: 25, descricao: "aaaaa", img: "https://cdn.pixabay.com/photo/2024/08/30/22/54/ai-generated-9010112_1280.jpg", cartegoria: "Lanche"},
    {id: 2, pedido: "Carlos", preco: 30, descricao: "aaaaa", img: "https://cdn.pixabay.com/photo/2024/08/30/22/54/ai-generated-9010112_1280.jpg", cartegoria: "Lanche"},
    {id: 3, pedido: "Maria", preco: 22, descricao: "aaaaa", img: "https://cdn.pixabay.com/photo/2024/08/30/22/54/ai-generated-9010112_1280.jpg", cartegoria: "Lanche"},
    {id: 4, pedido: "Marcos", preco: 18, descricao: "aaaaa", img: "https://cdn.pixabay.com/photo/2024/08/30/22/54/ai-generated-9010112_1280.jpg", cartegoria: "Lanche"},
    {id: 5, pedido: "Ana Júlia", preco: 15, descricao: "aaaaa", img: "https://cdn.pixabay.com/photo/2024/08/30/22/54/ai-generated-9010112_1280.jpg", cartegoria: "Lanche"}
]

app.get('/',(require, response) => {
    response.send("TESTE")
})

app.get('/pedidos',(request, response) =>{
    response.json(pedidos);
})


app.get('/pedidos/:id', (request, res) =>{
    const id = request.params.id
    const Pedido = pedidos.find(u => u.id == id)

    if(Pedido){
        res.json(Pedido)
    }else{
        res.status(404).json({mensagem: "Pedido não encontrado"})
    }
})

app.get('/pedidos/pedido/:pedido', (req, res) => {
    const buscaPedido = req.params.Pedido.toLowerCase();
    const resultados = pedidos.filter(u => u.Pedido.toLowerCase().includes(buscaPedido));
    if(resultados.length > 0){
        res.json(resultados);
    }else{
        res.status(404).json({mensagem: "Pedido não encontrado"})
    }

})

app.delete('/pedidos/:id', (req, res) => {
    const id = req.params.id
    pedidos = pedidos.filter(u => u.id != id);

    res.json({mensagem: "Pedido removido com sucesso"})
})

app.post('/pedidos', (req, res) => {
    const ultimoID = pedidos.reduce(max, Pedido => Math.max(max, Pedido.id), 0);


    const novoPedido = {
        id: pedidos.ultimoID + 1,
        pedido: req.body.pedido,
        preço: req.body.preço
    };

    pedidos.push(novoPedido);
    res.status(201).json(novoPedido)
})

app.put('/pedidos/:id', (req, res) => {
    const id = req.params.id
    const Pedido = req.body.pedido
    const preço = req.body.preço

    const PedidoErro = pedidos.find (u => u.id == id)

    if(!Pedido) {
        return res.status(404).json({mensagem: "Pedido não encontrado"})
    }

    Pedido.Pedido = Pedido || Pedido.Pedido
    Pedido.preço = preço || Pedido.preço
    res.json(Pedido)
})

app.get('/pedidos/preco/:preco', (req, res) => {
    const preço = req.params.preço
    const resultados = pedidos.filter(u => u.preço == preço)

    if(resultados.length > 0){
        res.json(resultados)
    }else{
        res.status(404).json({mensagem: "Nenhum pedido encontrado com essa preço"})
    }
})

