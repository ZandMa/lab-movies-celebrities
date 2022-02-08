// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movies = require("../models/Movie.model");


// all your routes here
router.get("/", (req, res, next) => {
    Movies.find()
      .then( moviesFromDB => {
        // res.send("here we will display the list of books")
        res.render("movies/movies-list", {movie: moviesFromDB});
      })
      .catch(err => {
          console.log ("Bad things happend and we kinda lost the data ....", err)
      });
  });
  

  //===== Create GET-route for /movies/new-movie
router.get("/new-movie", (req, res, next) => {
    Movies.find()
      .then((movieDetails) => {
        res.render("movies/new-movie", { movie: movieDetails });
      })
      .catch((err) => {
        console.log("Error getting celeb details from DB...", err);
      });
  });
  
  // ===== Create POST-route for celeb/new-movie submit page
  router.post("/new-movie", (req, res, next) => {
    const { title, genre, plot, cast } = req.body;
    const movieDetails = req.body;
  
    Movies.create(movieDetails)
      .then(() => {
        res.redirect("/movies");
      })
      .catch((err) => {
        console.log("Error creating new celeb..", err);
      });
  });


  router.get("/:movieId", (req, res, next) =>{
      const movieId = req.params.movieId;
      
    Movies.findById(movieId)
    .then((movieDetails) => {
        res.render("movies/movie-details", movieDetails);
    })
    .catch((err) => {
        console.log("Error displaying movie", err)
    })
    })
  
  //====== Create route for book delete page
router.post("/:bookId/delete", (req, res, next) => {
    const movieId = req.params.bookId;
  
    Movies.findByIdAndDelete(movieId)
      .then(() => {
        res.redirect("/movies");
      })
      .catch((err) => {
        console.log("Error deleting book", err);
      });
  });



  
  module.exports = router;