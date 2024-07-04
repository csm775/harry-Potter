document.addEventListener('DOMContentLoaded', (event) => {
    let deballerButton = document.getElementById('deballer');
    // déclanchement de la fonction au clique du bouton 
    deballerButton.addEventListener('click', async () => {
        let characters = await fetchCharacters();
        let randomCharacters = getRandomCharacters(characters, 5); // récupération de 5 cartes
        localStorage.setItem('selectedCharacters', JSON.stringify(randomCharacters));
        window.location.href = 'profil.html';
    });
});

// srécupération des cartes depuis l'api
async function fetchCharacters() {
    let response = await fetch('https://hp-api.lainocs.fr/characters');
    let data = await response.json();
    return data;
}

// récupération des cartes de façon aléatoire
function getRandomCharacters(characters, number) {
    let melanger = characters.sort(() => 0.5 - Math.random());
    return melanger.slice(0, number);
}
