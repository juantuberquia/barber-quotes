const saveStorage = (dataUser) => {
  let sizeCollection = dataUser.length;
  localStorage.setItem(
    sizeCollection,
    JSON.stringify(dataUser[sizeCollection - 1])
  );
};

// window.addEventListener("load", getDataStorage());

// function getDataStorage() {
//   for (let i = 0; i < localStorage.length; i++) {
//     let clave = localStorage.key(i);
//     console.log("Clave: " + clave);
//     let getDataLocal = JSON.parse(localStorage.getItem(clave));
//     console.log(getDataLocal.nombre);

//     let summary = document.getElementById("col-summary-quote");
//     let containerQuote = document.createElement("div");

//     let paragraphName = document.createElement("p");
//     paragraphName.innerText = getDataLocal.nombre;

//     let paragraphType = document.createElement("p");
//     paragraphType.innerText = getDataLocal.tipoCorte;

//     let paragraphTime = document.createElement("p");
//     paragraphTime.innerText = getDataLocal.fecha;

//     containerQuote.appendChild(paragraphName);
//     containerQuote.appendChild(paragraphType);
//     containerQuote.appendChild(paragraphTime);
//     summary.appendChild(containerQuote);
//   }
// }
