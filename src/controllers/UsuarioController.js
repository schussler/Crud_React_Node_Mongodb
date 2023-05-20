/**/
const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

module.exports = { // Serve para exportar as funçoes criadas aqui em outros arquivos da APP

  //=> Insert data

  async insert(req, res) {
    const usuarios = await Usuario.create(req.body); // Cria um documento com os dados que estao sendo passado no corpo ta requisição(REQ)
    return res.json(usuarios); // Retorna os dados em formato JSON
  },
  //=> Select ALL function

  async index(req, res) {
    const { page } = req.query; // Recurço de paginação 
    const usuarios = await Usuario.paginate({}, { page, limit: 5 }); // Limita a quantidade de dados por pagina
    return res.json(usuarios); // Retorna os dados em formato JSON
  },
  //=> Select ONE function

  async datails(req, res) {
    const usuarios = await Usuario.findById(req.params.id); // Pega no corpo da requisao o parametro ID e passa para o findById
    return res.json(usuarios); // Retorna os dados em formato JSON
  },
  //=> Update function

  async update(req, res) {
    const usuarios = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(usuarios); // Retorna os dados em formato JSON
  },

  //=> Delete function
  async delete(req, res) {
    await Usuario.findByIdAndRemove(req.params.id);
    return res.status(200).send('Excluido com sucesso') // Retorna mensagem com codigo 200 que significa que foi excluido com sucesso
  }

}