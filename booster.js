document.addEventListener('DOMContentLoaded', (event) => {
    const deballerButton = document.getElementById('deballer');

    deballerButton.addEventListener('click', async () => {
        const characters = await fetchCharacters();
        const randomCharacters = getRandomCharacters(characters, 5);
        // Stockez les personnages sélectionnés dans le localStorage
        localStorage.setItem('selectedCharacters', JSON.stringify(randomCharacters));
        // Redirigez vers la page profil.html
        window.location.href = 'profil.html';
    });
});

async function fetchCharacters() {
    const response = await fetch('https://hp-api.lainocs.fr/characters');
    const data = await response.json();
    return data;
}

function getRandomCharacters(characters, number) {
    const shuffled = characters.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, number);
}
