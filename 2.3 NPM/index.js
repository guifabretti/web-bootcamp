//O que é NPM?
// Basicamente um local que coleta módulos que as pessoas criaram para o Node.js
// É uma espécie de biblioteca de ferramentas da comunidade

// para instalar a "ferramenta" que irá utilizar, deve se pesquisar no site npmjs.com, logo depois copiar a linha de código da determinada ferramenta, exemplo: "npm i sillyname" => Vai criar um arquivo 'package.json' e um 'Node Modules' com todos os arquivos necessários para roda a ferramenta.


// Versão Commum JavaScript (CJS):
var generateName = require("sillyname");

// Versão ECMAScript Module (ESM):
import generateName from "sillyname";

var sillyname = generateName();

console.log(`My name is ${sillyname}`);

// Essa é uma ferramenta que gera nomes aleatórios.