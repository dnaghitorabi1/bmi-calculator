const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  let height = Number(req.body.num1);
  let weight = Number(req.body.num2);
  let result = weight / Math.pow(height, 2);

  res.send("Your BMI is: " + result);
});

app.listen(port, function() {
  console.log("Server listening on port " + port);
});
