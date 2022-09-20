// captura datos del nombre de usuario, para validar si son correctos
let elementInput = document.getElementById("NameInput");
elementInput.addEventListener("change", function (e) {
  validateData(e.target.value);
});

// captura datos del tipo de cita que desea, para validar si son correctos
let elementOption = document.getElementById("selected");
elementOption.addEventListener("input", (e) => {
  validateOption(e.target.value);
});

// captura hora elegida para la cita, con el fin de validar si son correctos
let elementDate = document.getElementById("time");
elementDate.addEventListener("change", (e) => {
  validateTime(e.target.value);
});

// function userPremiun(checkdata) {
//   if (checkdata.find((element) => element.nombre === "juan")) {
//     alert("eres usuario premiun, tienes un descuento del 20%");
//   } else {
//     alert("gracias por elegir Barberia Tutu");
//   }
// }
