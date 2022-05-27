const express = require("express");
const app = express();
const port = 3000;

app.get("/", function(req, res) {
  res.send("GET request to the homepage");
});

app.post("/", function(req, res) {
  res.send("POST request to the homepage");
})

app.listen(port, function() {
  console.log("Server listening on port " + port);
});
