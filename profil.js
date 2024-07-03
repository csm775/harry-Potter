document.addEventListener('DOMContentLoaded', (event) => {
    // Récupérez les personnages sélectionnés depuis le localStorage
    const selectedCharacters = JSON.parse(localStorage.getItem('selectedCharacters'));
    if (selectedCharacters) {
        displayCharacters(selectedCharacters);
    }
});

function displayCharacters(characters) {
    const container = document.getElementById("characters-collection");
    container.innerHTML = '';  // Clear previous characters
    characters.forEach(character => {
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
