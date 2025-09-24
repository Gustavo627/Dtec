const { response } = require("express");

//Criandp uma constante cm o endereço da API
const API_URL = "http://localhost:3000/usuarios";

//Seleção de Elementos do HTML INICIAL
const userCardContainer = document.getElementById('user-cards-container');
const addUserForm = document.getElementById('addUserForm');
const btnListUsers = document.getElementById('btnListUsers');

//Seleção de elementos do MODAL
const editModal = document.getElementById('editModal');
const editUserForm = document.getElementById('edituserForm');
const btnCancelEdit = document.getElementById('btnCancelEdit');
const editIdInput = document.getElementById('editId');
const editNameInput = document.getElementById('editName');
const editAgeInput = document.getElementById('editAge');

//CRIAÇÃO DAS FUNÇÕES
function fetchAndRenderUsers() {
    //Faz uma requisição  GET para a URL
    fetch(API_URL)
       .then(response => response.json())
       //renderUsers() função que vai organizar as informções na tela
       .then(users => renderUsers(users))
       .catch(error => {
           console.error("Erro ao buscar usuários", error);
           userCardsContainer.innerHTML = '<p>Erro ao carregar usuários</p>';
       });
}

//Função para adiicionar um novo usuário
function addUser(userData){
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then( response => responde.json())
    .then(() => {
        addUserForm.reset();
        fetchAndRenderUsers();
    })
    .catch(error => console.error("Erro ao adicionar usuário", error));
}

//FUNÇÃO PARA EDITAR USUÁRIO EXISTENTE
function editUser(userId, userData) {
    fetch(`${API_URL}/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        }, 
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(() => {
        editModal.style.display = 'none';
        fetchAndRenderUsers();
    })
    .catch(error => console.error("Erro ao editar usuário", error));
}

function deleteUser(userId) {
    fetch(`${API_URL}/${userId}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(() => {
    fetchAndRenderUsers()
    })
    .catch(error => console.error("Erro ao deletar usuário", error));
}

function renderUsers(users) {
    userCardsContainer.innerHTML = " ";
    
    if(users.length === 0) {
        userCardsContainer.innerHTML ='<p>Nenhum usuário encontrado.<p>';
        return;
    }

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className= 'user-card';

        userCard.innerHTML = `
        <div class="user-info">
            <p><strong>ID:</strong> ${user.id}<p>
            <p><strong>Nome:</strong> ${user.name}</p>
            <p><strong>Idade:</strong> ${user.idade}</p>
        </div>
        
        <div class="card-buttons">
            <button class="btn-edit">Editar</button>
            <button class="btn-delete">Deletar</button>
        </div>
        `;

        const editBtn = userCard.querySelector('.btn-edit');
        const deleteBtn = userCard.querySelector('.btn-delete');

        editBtn.addEventListener('click', () => {
            editIdInput.value = user.id;
            editNameInput.value = user.name;
            editAgeInput.value = user.idade;
            editModal.style.display = 'flex';
        })
    })
}