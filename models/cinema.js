const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getListOfFilmTitles = function() {
  const result = this.films.map((film) => {
    return film.title
  });
  return result
};

Cinema.prototype.findFilmByTitle = function(searchTitle) {
  const result = this.films.filter((film) => {
    return film.title === searchTitle
  });
  return result
};

Cinema.prototype.filterFilmsByGenre = function(searchGenre) {
  const result = this.films.filter((film) => {
    return film.genre === searchGenre
  });
  return result
};

Cinema.prototype.filmsFromParticularYear = function(searchYear) {
  const result = this.films.some((film) => {
    return film.year === searchYear
  });
  return result
};

Cinema.prototype.filmsOverParticularLength = function(searchLength) {
  const result = this.films.every((film) => {
    return film.length > searchLength
  });
  return result
};

Cinema.prototype.totalRunningTimeOfAllFilms = function() {
  const result = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length
  }, 0)
  return result
}

module.exports = Cinema;
