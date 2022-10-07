/*
   obtener imagenes de api pixabay
   */

const collectionSearch = ["", "barber shop", "barberia"];
// captura texto aleatorio
let search = collectionSearch[Math.round(Math.random() * 2)];

const key = "14166181-a93322c4f13390a817f56b032";
const imgsForPage = 5;

const showImagesBarber = async () => {
  const response = await fetch(
    `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imgsForPage}`
  );
  const res = await response.json();

  console.log(res);
};
