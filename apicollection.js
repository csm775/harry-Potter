function fetchCharacters(characters) {
    return fetch("https://hp-api.lainocs.fr/characters/" + characters)
    .then((response) => response.json())
}

async function displayCharacters(characters){
    const data = await fetchCharacters(characters)
    document.getElementById("characters-collection").innerHTML += `
    <div class="character-carte">
    <h3>${data.name}</h3>
    <p>House: ${data.house}</p>
    <p>Actor: ${data.actor}</p>
    <img src="${data.image}" alt="${data.name}" /> `
    
}

displayCharacters("albus-dumbledore")
displayCharacters("harry-potter")
displayCharacters("cho-chang")
displayCharacters("ron-weasley")
displayCharacters("draco-malfoy")
displayCharacters("hermione-granger")
displayCharacters("minerva-mcgonagall")
displayCharacters("severus-snape")
displayCharacters("lord-voldemort")
displayCharacters("sirius-black")
displayCharacters("bellatrix-lestrange")
displayCharacters("neville-longbottom")


