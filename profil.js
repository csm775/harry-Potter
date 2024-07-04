document.addEventListener('DOMContentLoaded', (event) => {
    let selectedCharacters = JSON.parse(localStorage.getItem('selectedCharacters')); // récupération des cartes depuis la fonction js
    if (selectedCharacters) {
        displayCharacters(selectedCharacters);
    }
});

function displayCharacters(characters) {
    let container = document.getElementById("characters-collection");
    container.innerHTML = ''; 
    characters.forEach(character => {
        // récupération des éléments de cartes a afficher
        container.innerHTML += `
            <div class="character-carte">
                <h3>${character.name}</h3>
                <p>House: ${character.house}</p>
                <p>Actor: ${character.actor}</p>
                <img src="${character.image}" alt="${character.name}" />
            </div>
        `;
    });
}
