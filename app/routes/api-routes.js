var Book = require("../models/book.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:book?", function(req, res) {
    // If the user provides a specific character in the URL...
    if (req.params.books) {
      // Then display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      Book.findOne({
        where: {
          routeName: req.params.title
        }
      }).then(function(result) {
        return res.json(result);
      });
    }
    else {
      // Otherwise...
      // Otherwise display the data for all of the characters.
      // (Note how we're using Sequelize here to run our searches)
      Book.findAll({}).then(function(result) {
        return res.json(result);
      });
    }
  });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {
    // Take the request...
    var book = req.body;

    // Then add the character to the database using sequelize
    Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      done: req.body.done
    });
  });
};