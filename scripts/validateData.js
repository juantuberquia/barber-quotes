class User {
  constructor(nombre, tipoCorte, fecha) {
    this.nombre = nombre;
    this.tipoCorte = tipoCorte;
    this.fecha = fecha;
  }
}

const persona1 = new User();
let collectionUsers = [];
let collectionHourQuote = [];

// valida nombre del cliente ingresado
function validateData(value) {
  value.trim() === ""
    ? alert(" favor ingresar datos correctos")
    : (persona1.nombre = value.trim());
}

// valida opcion seleccionada del tipo de cita
function validateOption(option) {
  option.trim() === ""
    ? alert(" favor ingresar datos correctos")
    : (persona1.tipoCorte = option.trim());
}

// valida hora seleccionada de la cita
function validateTime(time) {
  time.trim() === ""
    ? alert(" favor ingresar datos correctos")
    : (persona1.fecha = time.trim());
}

// evento agendar cita
let elementSubmit = document.getElementById("submit");
elementSubmit.addEventListener("click", createQuoteSummary);

// crea un resumen (div) con la informacion suministrada de la cita
function createQuoteSummary() {
  let summary = document.getElementById("col-summary-quote");
  let containerQuote = document.createElement("div");

  let { nombre, tipoCorte, fecha } = persona1;

  if (fecha === undefined || nombre === undefined || tipoCorte === undefined) {
    alert("ingresar datos");
  } else {
    // guarda informacion del usuario en el array
    collectionUsers.push({ ...persona1 });
    // guarda informacion de la cita, en el local storage
    saveStorage(collectionUsers);

    let paragraphName = document.createElement("p");
    paragraphName.innerText = nombre;

    let paragraphType = document.createElement("p");
    paragraphType.innerText = tipoCorte;

    let paragraphTime = document.createElement("p");
    paragraphTime.innerText = fecha;

    containerQuote.appendChild(paragraphName);
    containerQuote.appendChild(paragraphType);
    containerQuote.appendChild(paragraphTime);
    summary.appendChild(containerQuote);
  }
}

// valida disponibilidad horaria
const availableHour = (fecha) => {
  let foundDate;

  if (collectionHourQuote.length === 0) {
    collectionHourQuote.push(fecha);
    return true;
  } else {
    foundDate = collectionHourQuote.find((date) => date === fecha);
    return false;
  }
};
