const burgerButton = document.querySelector('.humburger-menu')
const burgerMenu = document.querySelector('.menu')
const burgerLink = document.querySelectorAll('.menu-list__item')


burgerButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('menu-active')
})

burgerLink.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('menu-active')
    })
});

document.addEventListener('click', (event) => {
    if (!(event.target.closest('.menu') || event.target.closest('.humburger-menu'))) {
         burgerMenu.classList.remove('menu-active')
    }
})
