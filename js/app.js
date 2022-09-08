
// console.log("I'm linked");

const cardCharacter = document.getElementById("cardCharacter");
const templateCharacter = document.getElementById("templateCharacter");
const findCharacter = document.getElementById("findCharacter");

const urlCharters = "https://rickandmortyapi.com/api/character/";

const fragment = document.createDocumentFragment();

document.querySelector("#btnSearch").addEventListener("click", () => {

    const idChacarter = findCharacter.value;
    searchCharacter(idChacarter);

    clearInput();

});

document.querySelector("#btnRandom").addEventListener("click", () => {

    searchCharacter(getRndInteger());

    clearInput();

});

// Functions

const searchCharacter = async (idChacarter) => {
    try {
        const res = await fetch(urlCharters + idChacarter);
        const data = await res.json();
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
    } catch {
        errorSearch();
        console.log("error");
    }
};

const printCharacter = (data) => {

    clearCardCharacter();

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

const errorSearch = () => {

    clearCardCharacter();

    const clone = templateCharacter.content.cloneNode(true);
    clone.querySelector("#photo").setAttribute("src", "resources/404.png");
    clone.querySelector("#name").textContent = "Not found";
    clone.querySelector("#specie").textContent = "Try other number, please";
    clone.querySelector("#status").textContent = "Remember that the threshold is 1 to 826";
    clone.querySelector("#location").textContent = ""
    clone.querySelector("#origin").textContent = "";

    fragment.appendChild(clone);

    cardCharacter.appendChild(fragment);

}

function getRndInteger() {
    return Math.floor(Math.random() * (827 - 1)) + 1;
}

// Clear
const clearInput = () => {
    findCharacter.value = "";
}

const clearCardCharacter = () => {
    cardCharacter.textContent = "";
}




















// const searchCharacter = () => {
//     fetch(urlCharters + findCharacter.value)
//         .then(res => res.json())
//         // .then(data => console.log(data))
//         .then(data => {
//             console.log(`
//     The charter selected:
//     Photo: ${data.image}
//     ID: ${data.id}
//     Name: ${data.name}
//     Specie: ${data.species}
//     Status: ${data.status}
//     Location: ${data.location.name}
//     Origin: ${data.origin.name}
//             `)
//             printCharacter(data);
//         });
// }