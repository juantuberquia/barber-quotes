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
    ? Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Favor ingresar datos correctos!",
      })
    : (persona1.nombre = value.trim());
}

// valida opcion seleccionada del tipo de cita
function validateOption(option) {
  option.trim() === ""
    ? Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Favor ingresar datos correctos!",
      })
    : (persona1.tipoCorte = option.trim());
}

// valida hora seleccionada de la cita
function validateTime(time) {
  time.trim() === ""
    ? Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Favor ingresar datos correctos!",
      })
    : (persona1.fecha = time.trim());
}

// evento agendar cita
let elementSubmit = document.getElementById("submit");
elementSubmit.addEventListener("click", createQuoteSummary);

// crea un resumen (div) con la informacion suministrada de la cita
function createQuoteSummary() {
  // valida campos del formulario
  let fieldForm = validateFieldsForm();
  fieldForm ? showDataQuote() : null;
  // carga imagenes alusivas a barberia
  showImagesBarber();
  // envia email al usuario
  sendEmail();
}

function validateFieldsForm() {
  let { nombre, tipoCorte, fecha } = persona1;
  if (fecha === undefined || nombre === undefined || tipoCorte === undefined) {
    Swal.fire({
      icon: "error",
      title: "Oops... ha ocurrido un error!",
      text: "Te falto rellenar algunos campos!",
    });
    return false;
  } else {
    return true;
  }
}

function showDataQuote() {
  let summary = document.getElementById("col-summary-quote");
  let containerQuote = document.createElement("div");

  let { nombre, tipoCorte, fecha } = persona1;
  // guarda informacion del usuario en el array
  collectionUsers.push({ ...persona1 });
  // guarda informacion de la cita, en el local storage
  saveStorage(collectionUsers);

  // crea div con los datos de la cita
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

  containerQuote.classList.add("card");

  Swal.fire(
    "Enhorabuena !",
    `Tienes una cita con tu barbero favorito! a las ${fecha}`,
    "success"
  );
}

// valida disponibilidad horaria
// const availableHour = (fecha) => {
//   let foundDate;

//   if (collectionHourQuote.length === 0) {
//     collectionHourQuote.push(fecha);
//     return true;
//   } else {
//     foundDate = collectionHourQuote.find((date) => date === fecha);
//     return false;
//   }
// };
