const express = require('express');
const routes = express.Router();

//GET ==> Usado somente para buscar informação (no maximo, mandar alguma query) -- Select
//POST ==> Usando para enviar dados de formularios.. (caracter, blob) --- CRAETE
//PUT ==> Usado apra atualização -- recebe parametro tanto query, post -- UPDATE
//DELETE ==> Usado para exclusão.... parametro sao via query --- Delete

routes.get('/', (req, res) => {
  return res.json({mensage : "pagina principal"})
}); 

routes.get('/produtos', (req, res) =>{
  return res.json({messagem : 'Rota de todos os Produtos'})
});

routes.post('/produtos', (req, res) =>{
  var produto = req.body.produto;
  return res.json({messagem : 'AddoProdut ' + produto.nome})
});

routes.put('/produtos', (req, res) =>{
  var id = req.query.id;
  var produto = req.body.produto;
  return res.json({messagem : 'Atualizar o produt ' + id +'com os dados do post'+ produto.nome})
});

routes.delete('/produtos', (req, res) =>{
  var id = req.query.id;
  return res.json({messagem : 'deleta o produto ' + id})
});

//#Exercisio... 
//Criar Rotar para Clientes e Pedidos

module.exports = routes;