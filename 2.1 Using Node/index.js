const fs = require("fs");

// cria um arquivo txt
fs.writeFile("message.txt", "Hello from NodeJS!", 
(err) => {
  if (err) throw err;
  console.log("The file has been saved!");
  //se tiver erro: joga para o erro, se não: console.log que deu certo
})

fs.readFile('./message.txt', 'utf8', (err, data) =>{
  if (err) throw err;
  fs.writeFile("message.txt", "Hello from Guilherme", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
    console.log(data)
  });
});