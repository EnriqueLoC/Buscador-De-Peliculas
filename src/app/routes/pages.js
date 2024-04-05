module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index.ejs');
  });
  

  app.get('/result/:movie', async (req, res) => {
    const { movie } = req.params;
    const response = await fetch('http://localhost:3000/version1/');
    const data = await response.json();

    const movies = data.data.filter(
      (information) =>
        information.title.toLowerCase().includes(movie.toLowerCase()) ||
        information.director.toLowerCase().includes(movie.toLowerCase()) ||
        information.producer.toLowerCase().includes(movie.toLowerCase()) ||
        information.genre.toLowerCase().includes(movie.toLowerCase())
    );

    console.log(movies);

    res.render('busquedaPelis.ejs', {
      movies,
    });
  });

  app.get('/movie_info/:movie_info', async (req, res) => {

    const { movie_info } = req.params;
    const cast_movie = [];
    const response = await fetch('http://localhost:3000/version1/');
    const data = await response.json();

    const cast_response = await fetch('http://localhost:3000/version1/cast')
    const data_cast = await cast_response.json();

    const movieInfo = data.data.filter(
      (information) =>
        information.title == movie_info
    )

    const cat_cast = movieInfo[0].cat_cast.split(",")

    cat_cast.map(cast => {
     const data3 = data_cast.data.filter(data => data.ID == cast && movieInfo[0].platform == data.platform)
     cast_movie.push(data3[0])
    })

    res.render('pelicula.ejs', {
      movieInfo, cast_movie
    });
  });
};
