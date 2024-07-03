const menuHamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links ul")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})

function fetchCharacters(characters) {
    return fetch("https://hp-api.lainocs.fr/characters/" + characters)
    .then((response) => response.json())
}
