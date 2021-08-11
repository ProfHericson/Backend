const User = require('../model/User')

//CRUD -Create - Read - Update - DELETE

module.exports = {
  async index(req,res){
    let users = await User.find()
    return res.json(users)
  },

  async store(req,res){ 
    const {name, email, ra, pwd} = req.body;
    const user = await User.create({name, email, ra, pwd})
    return res.json(user)
  },

  async update(req,res){
    //recupera o Id que pela url query e guarda na variavel id
    var id = req.query.id;
    //recupera as inf do post em 
    
    let user = await User.findById(id);
    user.name = req.body.name;
    user.email = req.body.email;
    user.age = req.body.ra;
    user.password = req.body.pwd;
    user = await User.updateOne({'_id': req.query.id} , user)

    return res.json({messagem : 'Atualizar o user ' + id +' com os dados do post '+ user.name})
  },
   
  async delete(req,res){
    var id = req.query.id;
    let user = await User.findById(id);
    user = await User.deleteOne(user);
    return res.json(user);
    
  },

  async validation(req,res){
    const {ra,pwd} = req.body;
    let users = await User.findOne({ra : ra, pwd : pwd })
    console.log(users)
    if(users === null){
      console.log('401')
      return res.status(203).json({mensagem : 'RA nao encontrado!'})
    }else{
      return res.status(200).json(users)
    }
    
  },

}