const button = document.querySelector('.open-modal-btn');
const cotainer = document.querySelector('.modal-container');
const modal = document.querySelector('.modal-ver-mais');

const activeModalClass = 'modal-show'

const openModal = () => cotainer.classList.add(activeModalClass);
const closeModal = () => cotainer.classList.remove(activeModalClass);

button.addEventListener('click', openModal)
cotainer.addEventListener('click', (event) => {
    if (modal.contains(event.target)) return;
    
    closeModal();
})