import express from "express";
const app = express();
const port = 3000;

//req = request | res = response
app.get("/", (req, res) => {
  res.send("<h1>Homepage!</h1>")
})

app.get("/contact", (req, res) => {
  res.send("<h1>Contact page!</h1> <p>+55 (19) 9 9968-4545</p>")
})

app.get("/about", (req, res) => {
  res.send("<h1>About me:</h1> <p>I'm Guilherme</p>")
})

app.listen(port, () => {
  console.log(`🔥 Server is runing on port ${port}`);
})
