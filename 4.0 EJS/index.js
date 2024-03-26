import express from "express";
import morgan from "morgan";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(morgan('dev'))

app.get("/", (req,res) => {
  const today = new Date();
  let day = today.getDay();

  let dt = "a weekday";
  let adv = "its time to work hard!"

  if (day === 0 || day === 6) {
    dt = "the weekend";
    adv = "its time to have some fun and recover energy!"
  }

  // passa o dayType e o advice para o arquivo .ejs, porém cada um deles recebe a variável da frente, anteriormente inserida.
  res.render("index.ejs", {
    dayType: dt,
    advice: adv,
  });
})

app.listen(port, () => {
  console.log(`🔥 Running on http://localhost:${port}`);
})
