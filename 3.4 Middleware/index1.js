import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

//Caminho do computador até o local da pasta, feito dinâmicamente, para qualquer SO
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); //urlencoded para formulários HTML

app.get("/", (req, res) => {
  //neste 'sendFiile' é necessário add o caminho completo até o arquivo necessário, por isso foi feito o '__dirname' para ser além de mais fácil, dinâmico.
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => { //enviando para o "action" especificado no HTML
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`🔥 Running on port ${port}`);
});
