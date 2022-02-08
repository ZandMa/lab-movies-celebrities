// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
router.get("/", (req, res, next) => {
    Movies.find()
      .populate("movie")
      .then( movieFromDB => {
  
        console.log(movieFromDB);
  
        // res.send("here we will display the list of books")
        res.render("movies/movies-list", {movie: movieFromDB});
      })
      .catch(err => {
          console.log ("Bad things happend and we kinda lost the data ....", err)
      });
  });

  
  module.exports = router;