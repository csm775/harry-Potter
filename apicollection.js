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
displayCharacters("cedric-diggory")
displayCharacters("gregory-goyle")
displayCharacters("vincent-crabbe")
displayCharacters("gilderoy-lockhart")
displayCharacters("luna-lovegood")
displayCharacters("lucius-malfoy")
displayCharacters("doloress-umbridge")
displayCharacters("alastor-moody")
displayCharacters("nymphadora-tonks")
displayCharacters("remus-lupin")
displayCharacters("fred-weasley")
displayCharacters("ginny-weasley")
displayCharacters("quirinus-quirrel")
displayCharacters("rubeus-hagrid")
displayCharacters("viktor-krum")
displayCharacters("fleur-delacour")
displayCharacters("george-weasley")
displayCharacters("peter-pettigrew")



