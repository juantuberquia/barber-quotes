// captura cambios del input
let elementInput = document
  .getElementById("NameInput")
  .addEventListener("change", function (e) {
    validateData(e.target.value);
  });

//  captura cambios del select
let elementOption = document.getElementById("selected");
elementOption.addEventListener("input", (e) => {
  validateOption(e.target.value);
});

// captura hora seleccionada
let elementDate = document
  .getElementById("time")
  .addEventListener("change", (e) => {
    validateTime(e.target.value);
  });

// function userPremiun(checkdata) {
//   if (checkdata.find((element) => element.nombre === "juan")) {
//     alert("eres usuario premiun, tienes un descuento del 20%");
//   } else {
//     alert("gracias por elegir Barberia Tutu");
//   }
// }
