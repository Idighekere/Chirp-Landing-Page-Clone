let burger = document.querySelector('.burger')
const nav = document.querySelector('nav ul')

burger.addEventListener('click', function () {
    nav.classList.toggle('show-nav')
    burger.classList.toggle('clicked')
})