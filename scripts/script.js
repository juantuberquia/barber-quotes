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

// function getValues() {
//   persona1.nombre = "ingrese nombre";
//   persona1.tipoCorte = "que tipo de corte desea?";
//   persona1.fecha = "ingrese hora";
//   users.push(persona1);
//   return users;
// }

// function validate(dataUser) {
//   dataUser.map(function (element) {
//     if (element.nombre.trim() === "") {
//       alert(" favor ingresar datos correctos");
//     } else if (element.tipoCorte.trim() === "") {
//       alert("favor ingresar datos correctos");
//     } else if (element.fecha.trim() === "") {
//       alert("favor ingresar datos correctos");
//     }
//   });

//   return dataUser;
// }

// function userPremiun(checkdata) {
//   if (checkdata.find((element) => element.nombre === "juan")) {
//     alert("eres usuario premiun, tienes un descuento del 20%");
//   } else {
//     alert("gracias por elegir Barberia Tutu");
//   }
// }

// for (i=0; i<1; i++){

//     const dataUser= getValues()
//     const checkData= validate(dataUser)
//     const findUser = userPremiun(checkData)

// }
