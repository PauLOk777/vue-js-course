const getYearFromDate = date => date.split("-")[0];

const getRandomGenre = listOfGenres => {
  const random = Math.floor(Math.random() * listOfGenres.length);
  return listOfGenres[random];
};

const joinGenres = genres => genres.join(" & ");

export { getYearFromDate, getRandomGenre, joinGenres };
