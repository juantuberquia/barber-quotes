/*
   obtener imagenes de api pixabay
*/

let search = "barber shop";
const key = "14166181-a93322c4f13390a817f56b032";
const imgsForPage = 5;

const showImagesBarber = async () => {
  const response = await fetch(
    `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imgsForPage}`
  );
  const res = await response.json();
  res.hits.map(mapearImagenes);

  // mapea resultados de la api, posteriormente, muestra imagenes de clientes
  function mapearImagenes(item) {
    let elementImage = document.getElementById("row-image-barber");

    let imageBarber = document.createElement("img");
    imageBarber.src = item.previewURL;

    // elementImage.appendChild(subTitle);
    elementImage.appendChild(imageBarber);
    imageBarber.className = "image-barber";
  }
};

window.addEventListener("load", showImagesBarber());
