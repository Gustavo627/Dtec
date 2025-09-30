//Endereço da API onde os produtos serão buscados.
const apiUrl = 'http://localhost:3001/produtos';

//Onde os elementos são pegos pelo DOM.
const orderModal = document.getElementById('orderModal');
const orderForm = document.getElementById('orderForm');
const btnCancelOrder = document.getElementById('btnCancelOrder');
const modalProductName = document.getElementById('modalProductName');
const orderProductId = document.getElementById('orderProductId');

//Função para renderizar os produtos na tela.
async function renderProducts() {
    try {
        const res = await fetch(apiUrl); //await transforma em um valor de retorno.
        const products = await res.json();

        ['bebidas', 'sanduiches', 'sobremesas'].forEach(cat => {
            const section = document.querySelector(`.cards-grid[data-categoria="${cat}"]`);
            if (section) section.innerHTML = '';
        }); //Limpa as seções antes de renderizar novos produtos.

        products.forEach(product => {
            const section = document.querySelector(`.cards-grid[data-categoria="${product.categoria}"]`);
            if (!section) return; //Separa os produtos por cartegoria.

            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.imagem}" alt="${product.nome}" class="product-image">
                <div class="product-info">
                    <h3>${product.nome}</h3>
                    <p><strong>Preço:</strong> R$ ${parseFloat(product.preco).toFixed(2)}</p>
                    <p>${product.descricao}</p>
                    <button onclick="openOrderModal(${encodeURIComponent(JSON.stringify(product))})">Fazer Pedido</button>
                </div>
            `;
            section.appendChild(card);
        }); //Cria o card, e, quando o  botão é clicado, passa os dados do produto.

    } catch (error) {
        alert('Erro ao carregar os produtos.');
        console.error(error);
    }
}

function openOrderModal(productJson) {
    const product = JSON.parse(decodeURIComponent(productJson));
    modalProductName.textContent = `Pedido: ${product.nome}`;
    orderProductId.value = product.id;
    orderModal.style.display = 'flex';
}//Abre modal de pedido.

btnCancelOrder.addEventListener('click', () => {
    orderModal.style.display = 'none';
    orderForm.reset();
});//Fecha o modal e "cancela" o pedido.

orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pedido = {
        produtoId: orderProductId.value,
        tamanho: document.getElementById('productSize').value,
        observacao: document.getElementById('productNote').value
    };

    console.log('Pedido enviado:', pedido);
    alert('Pedido enviado com sucesso!');
    orderForm.reset();
    orderModal.style.display = 'none';

});//Submete o pedido (simulado).

window.addEventListener('click', (e) => {
    if (e.target === orderModal) {
        orderModal.style.display = 'none';
        orderForm.reset();
    }
});//Se o usuário clicar fora do modal, ele fecha.

renderProducts();