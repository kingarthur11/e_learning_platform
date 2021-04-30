const {LearnProgress} = require('../../models');

exports.create = async (req, res) => {
    const {
        enrollmentId,
        courseChapterContentId,
        beginTimeStamp,
        completionTimeStamp,
        status
    } = req.body;
    try {
    const data = await LearnProgress.create({
        enrollmentId,
        courseChapterContentId,
        beginTimeStamp,
        completionTimeStamp,
        status 
    });
       return res.status(200).json(data)
    } catch (error) {
        return res.status(500).send({
        message: error.message || "some error occured while creating a course"
        });
    }
};

exports.findAll = async (req, res) => {
    try {
    const data = await LearnProgress.findAll({});
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
        let data = await LearnProgress.findByPk(id);
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
        enrollmentId,
        courseChapterContentId,
        beginTimeStamp,
        completionTimeStamp,
        status
        } = req.body;
    const data = await LearnProgress.update({
        enrollmentId,
        courseChapterContentId,
        beginTimeStamp,
        completionTimeStamp,
        status
        }, {where: { id: id }});
        return res.send({user: data})
    } catch (error) {
        return res.status(500).send({message: "error retrieving for update"})
    }
   
}

exports.delete = async (req, res) => {
    let {id} = req.params;
    try {
        await LearnProgress.destroy({where: { id: id }})
        return res.status(200).send({message: "ok"})
    } catch (error) {
        return res.status(500).send({message: "error retrieving"})
    }
};

exports.deleteAll = async (req, res) => {
    try {
        await LearnProgress.destroy({
            where: {},
            truncate: false
          })
        return res.status(200).send({message: "ok"})
    } catch (error) {
        return res.status(500)
            .send({message: "error retrieving"})
    }
}


  