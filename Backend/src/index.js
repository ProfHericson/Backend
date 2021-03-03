//1 - instalar o node
//2 - instalar yarn
//3 - criar a pasta de projetos
//4 - Criar a pasta do Backend
//5 - Dentro da pasta Backend  execulta o | $yarn init
//6 - criar o arquivo index.js
//7 - instalar o express | $yarn add express
//8 - instalar o insomonia para testes
//9 - copiar o codigo abaixo para testar
//10- executar o codigo abaixo para fazer o get r o post no insomnia

const express = require('express');

const app = express();

app.listen(3000)
app.use(express.json()) 

//GET ==> Usado somente para buscar informação (no maximo, mandar alguma query) -- Select
//POST ==> Usando para enviar dados de formularios.. (caracter, blob) --- CRAETE
//PUT ==> Usado apra atualização -- recebe parametro tanto query, post -- UPDATE
//DELETE ==> Usado para exclusaõ.... parametro sao via query --- Delete

app.get('/', (req, res) =>{
  var id = req.query.id;
  return res.json({messagem : 'hello word ' + id})
});

app.post('/', (req, res) =>{
  var nome = req.body.nome;
  return res.json({messagem : 'hello word ' + nome})
});