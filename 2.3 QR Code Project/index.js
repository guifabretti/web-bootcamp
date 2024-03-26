/*
1. Usar o inquirer npm package para pegar o link do usuário
2. Usar o qr-image npm package para transformar o link em qrcode
3. Criar um .txt para salvar o link do usuário usando fs node module
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type your URL:",
      name: "URL"
    }
  ])
  .then((answers) => {
    console.log(answers.URL);
    var qr_png = qr.image(answers.URL);
    qr_png.pipe(fs.createWriteStream('my_url_qr.png'))

    fs.writeFile("your_url.txt", answers.URL, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment") 
    } else {
      console.log("Something else went wrong")
    }
  });