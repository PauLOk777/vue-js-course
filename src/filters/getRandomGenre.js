export default listOfGenres => {
  const random = Math.floor(Math.random() * listOfGenres.length);
  return listOfGenres[random];
};
