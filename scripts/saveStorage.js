const saveStorage = (dataUser) => {
  let sizeCollection = dataUser.length;

  localStorage.setItem(
    `usuario # ${sizeCollection}`,
    JSON.stringify(dataUser[sizeCollection - 1])
  );
};
