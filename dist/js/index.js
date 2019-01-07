let btn = document.getElementById("userBtn");
let pageNumber = 1;

btn.addEventListener("click", () => {
  actorInput = document.getElementById("inputValue").value;
  document.getElementById("inputValue").value = "";
  getActor();
});

function actorHTML(data) {
  document.getElementById("actorCard").innerHTML = "";
  data.forEach(actor => {
    //console.log(actor.name);
    let cards = `<div class="cards"><h3> Name: ${
      actor.name
    } </h3><p>Birth-year: ${actor.birth_year}</p><p>Weight: ${
      actor.mass
    }</p><p>Hair-color: ${actor.hair_color}</p></div>`;
    document.getElementById("actorCard").innerHTML += cards;
  });
}

async function actorList() {
  let res = await fetch(`https://swapi.co/api/people/?page=${pageNumber}`);
  let data = await res.json();
  actorHTML(data.results);
}
actorList();

function next() {
  if (pageNumber < 9) {
    pageNumber++;
    actorList();
  }
}

function back() {
  if (pageNumber > 1) {
    pageNumber--;
    actorList();
  }
}

function renderHTML(data) {
  document.getElementById("actorCard").innerHTML = "";
  data.forEach(actor => {
    console.log(actor.name);
    let cards = `<div class="cards"><h3> Name: ${
      actor.name
    } </h3><p>Birth-year: ${actor.birth_year}</p><p>Weight: ${
      actor.mass
    }</p><p>Hair-color: ${actor.hair_color}</p></div>`;
    document.getElementById("actorCard").innerHTML += cards;
  });
}
//renderHTML();
async function getActor() {
  let res = await fetch(`https://swapi.co/api/people/?search=${actorInput}`);
  let data = await res.json();
  //console.log(data.results);
  renderHTML(data.results);
}
