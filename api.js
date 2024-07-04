function fetchCharacters(characters) {
    return fetch("https://hp-api.lainocs.fr/characters/" + characters) // récupération des donnés de l'api 
    .then((response) => response.json())
}

async function displayCharacters(characters){
    const data = await fetchCharacters(characters)
    // récupération des éléments a afficher sur les cartes
    document.getElementById("characters").innerHTML += `
    <div class="character-carte">
    <h3>${data.name}</h3>
    <p>House: ${data.house}</p>
    <p>Actor: ${data.actor}</p>
    <img src="${data.image}" alt="${data.name}" /> `
    
}

// appel des personnages spécifiques
displayCharacters("albus-dumbledore")
displayCharacters("harry-potter")
displayCharacters("cho-chang")
displayCharacters("draco-malfoy")