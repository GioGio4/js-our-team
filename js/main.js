// TRACCIA
// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// ------------------------------DATI----------------------------------------------
// Wayne Barnett		Founder & CEO			wayne-barnett-founder-ceo.jpg
// Angela Caroll		Chief Editor			angela-caroll-chief-editor.jpg
// Walter Gordon		Office Manager			walter-gordon-office-manager.jpg
// Angela Lopez		Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada		Developer				scott-estrada-developer.jpg
// Barbara Ramos		Graphic Designer		barbara-ramos-graphic-designer.jpg
// ----------------------------------------------------------------------------------

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// Creiamo una lista(ARRAY) con all'interno tutti i membri del team(OBJECT)  con le loro carratteristiche(PROPRIETA: VALORI)

const users_team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    photos: "./img/wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    photos: "./img/angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    photos: "./img/walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez	",
    role: "Social Media Manager",
    photos: "./img/angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer	",
    photos: "./img/scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    photos: "./img/barbara-ramos-graphic-designer.jpg",
  },
];

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// for (const user in users_team) {
//   console.log(
//     users_team[user].name + users_team[user].role + users_team[user].photos
//     );
//   }

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// const container_box = document.getElementById("container-box");

// for (const user in users_team) {
//   container_box.innerHTML += `<p>${users_team[user].name},${users_team[user].role},${users_team[user].photos}</p>`;
// }

// BONUS //
// Trasformare la stringa foto in una immagine effettiva
// Organizzare i singoli membri in card/schede

const cards_container = document.getElementById("cards-container");

for (const user in users_team) {
  cards_container.innerHTML += `<div class="col-4">
  <div class="cards">
    <img src="${users_team[user].photos}" alt="members" />
    <div class="card-text text-center">
      <h4>${users_team[user].name}</h4>
      <p>${users_team[user].role}</p>
    </div>
  </div>
</div>`;
}
