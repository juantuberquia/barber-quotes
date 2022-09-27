window.addEventListener("load", getDataStorage());

function getDataStorage() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let getDataLocal = JSON.parse(localStorage.getItem(key));

    let { nombre, fecha, tipoCorte } = getDataLocal;

    let summary = document.getElementById("col-summary-quote");
    let containerQuote = document.createElement("div");

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
