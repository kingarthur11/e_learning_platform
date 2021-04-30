const {LanguageName, Course} = require('../../models');

exports.created = async (req, res) => {
    const {
        name
    } = req.body;
    
    try {
    const data = await LanguageName.create({
        name
    });
        console.log(data)
       return res.status(200).json(data)
    } catch (error) {
        return res.status(500).send({
        message: error.message || "some error occured while creating a course"
        });
    }
};

exports.findAll = async (req, res) => {
    try {
    const data = await LanguageName.findAll({
        include: [{
            model: Course,
          }]
     });
        return res.status(200).json(data)
     } catch(error) {
        return res.status(500).send({
        message: error.message || "soething went wrong"
         })
     }
 };

exports.findOne = async (req, res) => {
    const {id} = req.params;
    try {
        let data = await LanguageName.findByPk(id, {
            include: [{
                model: Course,
              }]
        });
        return res.status(200).json(data);      
    } catch (error) {
        return res.status(500).send({message: "error retrieving"})
    }
}

exports.update = async (req, res) => {
    try {
        if(!req.body){
            return res.status(400).send({message: 'Data to update cannot be empty'})
        }
    const {id} = req.params; 
    let {
        name
        } = req.body;
    const data = await LanguageName.update({
        name
        }, {where: { id: id }});
        return res.send({user: data})
    } catch (error) {
        return res.status(500).send({message: "error retrieving for update"})
    }
   
}

exports.delete = async (req, res) => {
    let {id} = req.params;
    try {
        await LanguageName.destroy({where: { id: id }})
        return res.status(200).send({message: "ok"})
    } catch (error) {
        return res.status(500).send({message: "error retrieving"})
    }
}

exports.deleteAll = async (req, res) => {
    try {
        await LanguageName.destroy({
            where: {},
            truncate: false
          })
        return res.status(200).send({message: "ok"})
    } catch (error) {
        return res.status(500)
            .send({message: "error retrieving"})
    }
}


  