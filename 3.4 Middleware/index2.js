// O Middleware "Morgan" é usado para monitorar todos os dados de entrada de sua API, verificar se tem algum dado incorreto que está sendo enviado e entre outros casos de uso.

import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

// o app.use() serve para especificarmos um middleware a ser utilizado
app.use(morgan('dev'));

app.get("/", (req, res) => {
  res.send("dev");
});

app.listen(port, () => {
  console.log(`🔥 Listening on port ${port}`);
});
