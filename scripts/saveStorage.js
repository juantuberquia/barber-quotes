const saveStorage = (dataUser) => {
  console.log(dataUser);
  let sizeCollection = dataUser.length;
  localStorage.setItem(
    sizeCollection,
    JSON.stringify(dataUser[sizeCollection - 1])
  );
};
