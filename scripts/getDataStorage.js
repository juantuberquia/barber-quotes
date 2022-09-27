window.addEventListener("load", getDataStorage());

function getDataStorage() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let getDataLocal = JSON.parse(localStorage.getItem(key));
    console.log(getDataLocal.nombre);

    let summary = document.getElementById("col-summary-quote");
    let containerQuote = document.createElement("div");

    let paragraphName = document.createElement("p");
    paragraphName.innerText = getDataLocal.nombre;

    let paragraphType = document.createElement("p");
    paragraphType.innerText = getDataLocal.tipoCorte;

    let paragraphTime = document.createElement("p");
    paragraphTime.innerText = getDataLocal.fecha;

    containerQuote.appendChild(paragraphName);
    containerQuote.appendChild(paragraphType);
    containerQuote.appendChild(paragraphTime);
    summary.appendChild(containerQuote);
  }
}
