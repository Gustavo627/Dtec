function mostrarModal() {
    const modal = document.getElementById(".modal");
    modal.style.display = 'flex';
}

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn-edit')) {
        mostrarModal()
    }
})