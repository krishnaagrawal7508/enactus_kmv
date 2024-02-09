import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("views/index.ejs");
});

app.get("/pehel", (req, res) => {
  res.render("views/pehel.ejs");
});

app.get("/sahaayta", (req, res) => {
  res.render("views/contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});