document.addEventListener('DOMContentLoaded', displayCharacters);
// récupération des données de l'api 
async function fetchCharacters() {
    const response = await fetch('https://hp-api.lainocs.fr/characters');
    const data = await response.json();
    return data;
}

async function displayCharacters() {
    let characters = await fetchCharacters();
    if (!characters) return;

    // selection de l'id html
    let container = document.getElementById('characters-collection');
    container.innerHTML = ''; 

    characters.forEach(character => {
        // récupération du nom, maison, acteur et image du personnage
        container.innerHTML += `
        <div class="character-carte" data-name="${character.name.toLowerCase()}">
            <h3>${character.name}</h3>
            <p>House: ${character.house || 'No House'}</p>
            <p>Actor: ${character.actor}</p>
            <img src="${character.image}" alt="${character.name}" />
        </div>`;
    });
}

// déclanchement évenement à l'écriture dans la barre de recherche
document.getElementById('barre-recherche').addEventListener('input', (event) => {
    let searchValue = event.target.value.toLowerCase();
    let cards = document.querySelectorAll('.character-carte');
    cards.forEach(card => {
        let name = card.getAttribute('data-name');
        // affiche ou non les cartes qui correspondent à la recherche 
        if (name.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
