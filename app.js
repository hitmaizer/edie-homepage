const hamburger = document.getElementById('hamburger')
const hamburgerDiv = document.querySelector('.hamburger__container')
const navBtns = document.querySelectorAll('.navbar__list--item')


hamburger.addEventListener('click', () => {
    hamburgerDiv.classList.toggle("open")
})

const sectionOne = document.getElementById('hero')
const options = {}

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }
        hamburgerDiv.classList.remove("open")
        observer.unobserve(hamburgerDiv)
    })
}, options)

observer.observe(sectionOne)

