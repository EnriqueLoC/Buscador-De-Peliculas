const movieServices = require('../services/movieServices.js');
const dbDisney = require('../database/DisneyDB.json');
const dbNetflix = require('../database/NetflixDB.json');
const dbMax = require('../database/MaxDB.json');
const { get } = require('../v1/routes/DisneyPlus.js');

const getAllmovies = (req, res) => {
  const getAllmovies = movieServices.getAllmovies();
  console.log(getAllmovies);
  res.send({ satus: 'ok', code: 200, data: getAllmovies });
};
const getbytitle = (req, res) => {
  const title = req.params.title;
  const getbytitle = movieServices.getbytitle(title);
  res.send({ satus: 'ok', code: 200, data: getbytitle });
};
const getbydirector = (req, res) => {
  const directorName = req.params.director.toLowerCase();

  // Filtrar las películas por director
  const moviesByDirector = dbDisney.movies.filter((movie) => {
    const directors = movie.director
      .split(',')
      .map((director) => director.trim().toLowerCase());
    return directors.includes(directorName);
  });

  if (moviesByDirector.length > 0) {
    res.json(moviesByDirector);
  } else {
    res
      .status(404)
      .json({
        error: 'No se encontraron películas para el director proporcionado.',
      });
  }
};

const getbygenre = (req, res) => {
  const genreName = req.params.genre.toLowerCase();
  const moviesbyGenre = dbDisney.movies.filter((movie) => {
    const genres = movie.genre
      .split(',')
      .map((genre) => genre.trim().toLowerCase());
    return genres.includes(genreName);
  });

  if (moviesbyGenre.length > 0) {
    res.json(moviesbyGenre);
  } else {
    res
      .status(404)
      .json({ error: 'No se encontraron peliculas con ese director' });
  }
};

const getCast = (req, res) => {
//  const getCast = movieServices.getCast();

 return res.send({ satus: 'ok', code: 200, data:  movieServices.getCast() });
};

module.exports = {
  getAllmovies,
  getbytitle,
  getbydirector,
  getbygenre,
  getCast
};
