const hamburger = document.getElementById('hamburger')
const hamburgerDiv = document.querySelector('.hamburger__container')
const navBtns = document.querySelectorAll('.navbar__list--item')


hamburger.addEventListener('click', () => {
    hamburgerDiv.classList.toggle("open")
})


