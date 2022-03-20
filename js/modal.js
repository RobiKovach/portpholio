const modalButton = document.querySelectorAll('.more')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__close')
const overlay = modal.querySelector('.overlay')

modalButton.forEach((modalBtn) => {
    modalBtn.addEventListener('click', (event) => {
        if (modalBtn === event.target) {
            modal.classList.remove('hidden')
        }
    })
})
overlay.addEventListener('click', () => {
    modal.classList.add('hidden')
})
modalClose.addEventListener('click', () => {
    modal.classList.add('hidden')
})
