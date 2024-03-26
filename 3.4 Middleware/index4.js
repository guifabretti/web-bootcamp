import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url)); 
const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.post("/submit", (req, res) => {
  bandName = req.body["street"] + req.body["pet"];
  res.send(`<h1>Band Name Generator</h1><h2>Your band name:</h2><p>${bandName} 😎</p>`);
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`🔥 Server started at http://localhost:${port}`);
});