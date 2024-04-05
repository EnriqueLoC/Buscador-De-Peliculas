const catMovies = require('../database/module');

const getAllmovies = () => {
    const getAllMovies = catMovies.getAllmovies();
    return getAllMovies;
}
const getbytitle = (title) => {
    const moviebytitle = catMovies.getbytitle(title);
    return moviebytitle;
}
const getbydirector = (director) => {
    const moviebydirector = catMovies.getbydirector(director);
    return moviebydirector;
}
const getbygenre = (genre) => {
    const moviebygenre = catMovies.getbygenre(genre);
    return moviebygenre;
}

const getCast = () => {
    const cast = catMovies.getCast();
    return cast;
}


//aqui irian los demas metodos

module.exports = {
    getAllmovies,
    getbytitle,
    getbydirector,
    getbygenre,
    getCast
    }