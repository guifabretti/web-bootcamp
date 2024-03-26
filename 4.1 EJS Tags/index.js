import express from "express";
import morgan from "morgan";
import ejs from "ejs";

const app = express();
const port = 3000;

app.use(morgan('dev'));

// exercise:
app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };
  res.render("index.ejs", data);
});
//

app.listen(port, () => {
  console.log(`🔥 Server started at http://localhost:${port}`);
})