
// console.log("I'm linked");

const cardCharacter = document.getElementById("cardCharacter");
const templateCharacter = document.getElementById("templateCharacter");

const urlCharters = "https://rickandmortyapi.com/api/character/";

const fragment = document.createDocumentFragment();

fetch(urlCharters + parseInt(prompt("Select ID: ")))
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => {
        console.log(`
            The charter selected:
            Photo: ${data.image}
            ID: ${data.id}
            Name: ${data.name}
            Specie: ${data.species}
            Status: ${data.status}
            Location: ${data.location.name}
            Origin: ${data.origin.name}
            `)
        printCharacter(data);
    });


const printCharacter = (data) => {

    cardCharacter.textContent = "";

    const clone = templateCharacter.content.cloneNode(true);
    clone.querySelector("#photo").setAttribute("src", data.image);
    clone.querySelector("#name").textContent = data.name;
    clone.querySelector("#specie").textContent = "Specie: " + data.species;
    clone.querySelector("#status").textContent = "Status: " + data.status;
    clone.querySelector("#location").textContent = "Location: " + data.location.name;
    clone.querySelector("#origin").textContent = "Origin: " + data.origin.name;

    fragment.appendChild(clone);
    
    cardCharacter.appendChild(fragment);

}