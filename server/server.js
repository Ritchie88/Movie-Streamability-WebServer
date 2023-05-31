const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001;

app.get("/", function(req, res) {
  res.send("It's working!")
})

app.get("/api", (req, res) => {
  console.log("here")
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log("app listening on port 3000")
})