const DisneyDB = require('./DisneyDB.json');
const MaxDB = require('./MaxDB.json');
const NetflixDB = require('./NetflixDB.json');
const PrimeVideoDB = require('./PrimeVideoDB.json');

const getAllmovies = () => {

    const movies = [];
    DisneyDB.movies.map(movie => {
        movies.push({...movie, platform: "disney"})
    })
    MaxDB.movies.map(movie => {
        movies.push({...movie, platform: "max"})
    })
    NetflixDB.movies.map(movie => {
        movies.push({...movie, platform: "netflix"})
    })
    PrimeVideoDB.movies.map(movie => {
        movies.push({...movie, platform: "primevideo"})
    })

    return movies.flat();
}

const getbytitle = (title) => {
    return DisneyDB.movies.filter(movie => movie.title === title);
}

const getbydirector = (director) => {
    // Split the input director string into an array of individual directors
    const inputDirectors = director.split(',').map(director => director.trim());

    // Filter movies to find those directed by any of the input directors
    const moviesByDirector = DisneyDB.movies.filter(movie => {
        // Split the directors listed for the movie and trim each director's name
        const movieDirectors = movie.director.split(',').map(director => director.trim());
        
        // Check if any of the input directors match any of the directors listed for the movie
        return inputDirectors.some(inputDirector => movieDirectors.includes(inputDirector));
    });
}

const getbygenre = (genre) => {
    const moviesByGenre = DisneyDB.movies.filter(movie => movie.genre === genre);
    console.log(moviesByGenre);
    return moviesByGenre;
}

const getCast = () => {

    const casts = [];
    DisneyDB.cat_cast.map(catalog => {
        casts.push({...catalog, platform: "disney"})
    })
    MaxDB.cat_cast.map(catalog => {
        casts.push({...catalog, platform: "max"})
    })
    NetflixDB.cat_cast.map(catalog => {
        casts.push({...catalog, platform: "netflix"})
    })
    PrimeVideoDB.cast.map(catalog => {
        casts.push({...catalog, platform: "primevideo"})
    })
    return casts.flat()
}

module.exports = {
    getAllmovies,
    getbytitle,
    getbydirector,
    getbygenre,
    getCast
};