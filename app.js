const express = require("express");
const app = express();
const randomWords = require("random-words");
const port = process.env.PORT || 3000;

//SetUp
app.use(express.static("public"));
app.set("view engine", "ejs");

//Routes
app.get("/", function(req, res) {
  //Create Random Words
  const getWord = function(letter) {
    let word = randomWords();

    while (word.charAt(0) !== letter) {
      word = randomWords();
    }

    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const n = getWord("n");
  const p = getWord("p");
  const m = getWord("m");

  res.render("npm", {
    n: n,
    p: p,
    m: m
  });
});

//Start Server
app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});
