//Criando uma constante com o endereço da API 
const CARDAPIO_URL = "http://localhost:3001/pedidos";

const WishCardsContainer = document.getElementById('Wish-cards-container');
const addWishForm = document.getElementById('addWishForm');
const btnListWishs = document.getElementById('btnListWishs');

//Seleção de elementos do MODAL
const editModal = document.getElementById('editModal');
const editWishForm = document.getElementById('editWishForm');
const btnCancelEdit = document.getElementById('btnCancelEdit');
const editIdInput = document.getElementById('editId');
const editNameInput = document.getElementById('editName')
const editPriceInput = document.getElementById('editPrice')


//CRIAÇÃO DE FUNÇÕES
function fetchAndRenderWishes() {
    //Faz uma requisição GET para a URL
    fetch(CARDAPIO_URL)
        .then(response => response.json())
        //renderWishes() função que vai organizar as informações na tela
        .then(Wishes => renderWishes(Wishes))
        .catch(error => {
            console.error("Erro ao buscar pedido", error);
            WishCardsContainer.innerHTML = `<p>Erro ao carregar pedidos</p>`
        })              
}

//Função para adicionar um novo pedido
function addWish(WishData){
    fetch(CARDAPIO_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(WishData)
    })
    .then(response => response.json())
    .then(() => {
        addWishForm
.reset();
        fetchAndRenderWishes();
    })
    .catch(error => console.error("Erro ao adicionar pedido", error)) ;   
}

//FUNÇÃO PARA EDITAR pedido EXISTENTE
function editWish(WishId, WishData){
    fetch(`${CARDAPIO_URL}/${WishId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(WishData)
    })
    .then(response => response.json())
    .then(() => {
        editModal.style.display = 'none';
        fetchAndRenderWishes();
    })
    .catch(error => console.error("Erro ao editar o pedido", error));
}

function deleteWish(WishId) {
    fetch(`${CARDAPIO_URL}/${WishId}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(() => {
        fetchAndRenderWishes()
    })
    .catch(error => console.error('Erro ao excluir pedido', error))
}

function renderWishes(Wishes) {
    WishCardsContainer.innerHTML = "";

    if(Wishes.length === 0) {
        WishCardsContainer.innerHTML = `<p>Nenhum pedido cadastrado</p>`
        return;
    }

    Wishes.forEach(Wish => {
        const WishCard = document.createElement('div');
        WishCard.className = 'Wish-card';

        WishCard.innerHTML = `
            <div class="Wish-info">
                <p><strong>ID:</strong>${Wish.id}</p>
                <p><strong>Nome:</strong>${Wish.pedido}</p>
                <p><strong>Preço:</strong>${Wish.preco}</p>
                <p><strong>Descrição:</strong>${Wish.descricao}</p>
                <p><strong>Imagem:</strong>${Wish.img}</p>
                <p><strong>Cartegoria:</strong>${Wish.cartegoria}</p>

            </div>
        `;

        const editBtn = WishCard.querySelector('.btn-edit');
        const deleteBtn = WishCard.querySelector('.btn-delete');

        editBtn.addEventListener('click', () => {
            editIdInput.value = Wish.id;
            editNameInput.value = Wish.nome;
            editPriceInput.value = Wish.preco;
            editDescInput.value = Wish.descricao;
            editImgInput.value = Wish.img;
            editCartInput.value = Wish.cartegoria;
            editModal.style.display = 'flex';
        })

        deleteBtn.addEventListener('click', () => {
            if(confirm(`Tem certeza que deseja excluir o pedido ${Wish.id}`)){
                deleteWish(Wish.id)
            }
        })
        WishCardsContainer.appendChild(WishCard);

    })

}

//Função botão Listar  pedidos
btnListWishs.addEventListener('click', fetchAndRenderWishes);

addWishForm.addEventListener('submit', (e) => {
    e.preventDefault();//Impede que o submit recarregue a página

    const newWishName = document.getElementById('addName').value
    const newWishPrice = parseInt(document.getElementById('addPrice').value);
    const newWishDesc = document.getElementById('addDesc').value
    const newWishImg = document.getElementById('addImg').value
    const newWishCart = document.getElementById('addCart').value

    addWish({pedido: newWishName, preco: newWishPrice, descricao: newWishDesc, img: newWishImg, cartegoria: newWishCart});
})

editWishForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const wishId = editIdInput.value;
    const newName = editNameInput.value;
    const newPrice = parseInt(editPriceInput.value);

    editWish(wishId, {nome: newName, idade: newPrice});
})

btnCancelEdit.addEventListener('click', () => {
    editModal.style.display = 'none'
})

window.addEventListener('click', (e) => {
    if(e.target === editModal) {
        editModal.style.display = 'none'
    }
})

fetchAndRenderWishes();