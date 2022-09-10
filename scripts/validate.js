class User {
  constructor(nombre, tipoCorte, fecha) {
    this.nombre = nombre;
    this.tipoCorte = tipoCorte;
    this.fecha = fecha;
  }
}
const persona1 = new User();
let collectionUsers = [];

function validateData(value) {
  if (value.trim() === "") {
    alert(" favor ingresar datos correctos");
  } else {
    persona1.nombre = value.trim();
  }
}

function validateOption(option) {
  if (option.trim() === "") {
    alert(" favor ingresar datos correctos");
  } else {
    persona1.tipoCorte = option.trim();
  }
}

function validateTime(time) {
  if (time.trim() === "") {
    alert(" favor ingresar datos correctos");
  } else {
    persona1.fecha = time.trim();
  }
}

// event submit
let elementSubmit = document
  .getElementById("submit")
  .addEventListener("click", eventClick);

function eventClick() {
  console.log(collectionUsers);
  collectionUsers.push(persona1);

  let summary = document.getElementById("col-summary-quote");
  let containerQuote = document.createElement("div");

  let paragraphName = document.createElement("p");
  paragraphName.innerText = persona1.nombre;

  let paragraphType = document.createElement("p");
  paragraphType.innerText = persona1.tipoCorte;

  let paragraphTime = document.createElement("p");
  paragraphTime.innerText = persona1.fecha;

  containerQuote.appendChild(paragraphName);
  containerQuote.appendChild(paragraphType);
  containerQuote.appendChild(paragraphTime);

  summary.appendChild(containerQuote);
}
