import express from "express";

const app = express();
app.set('view engine', 'ejs');
const port = 9000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({messgae: "hello from express"});
});

app.get("/home", (req, res) => {
  res.render("index.ejs");
});

app.get("/pehel", (req, res) => {
  res.render("pehel.ejs");
});

app.get("/sahaayta", (req, res) => {
  res.render("sahaayta.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});