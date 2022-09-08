
// console.log("I'm linked");

const urlCharters = "https://rickandmortyapi.com/api/character/";

fetch(urlCharters + parseInt(prompt("Select an ID:")))
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
    `)});

