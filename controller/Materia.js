const Materia = require('../model/Materia')

module.exports = {
  async index(req,res){
    let materias = await Materia.find()
    return res.json(materias)
  },

  async store(req,res){ 
    const {name} = req.body;
    const materia = await Materia.create({name})
    return res.json(materia)
  },

  async update(req,res){
    let materia = await Materia.findById(req.query.id);
    materia.name = req.body.name;
    materia = await Materia.updateOne({'_id': req.query.id} , materia)
    return res.json({messagem : 'Atualizar a materia ' + id +' com os dados do post '+ materia.name})
  },
   
  async delete(req,res){
    let materia = await Materia.findById(req.query.id);
    materia = await Materia.deleteOne(materia);
    return res.json(materia);
  }
}