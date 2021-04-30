const {CourseChapterContent, LearnProgress} = require('../../models');

exports.create = async (req, res) => {
    const {
        courseChapterId, 
        contentTypeId, 
        isMandatory,
        timeRequiredInSeconds,
        isOpenForFree
    } = req.body;
    try {
    const data = await CourseChapterContent.create({
        courseChapterId, 
        contentTypeId, 
        isMandatory,
        timeRequiredInSeconds,
        isOpenForFree });
    return res.status(200).json(data)
    } catch (error) {
        return res.status(500).send({
        message: error.message || "some error occured while creating a course"
        });
    }
};

exports.findAll = async (req, res) => {
     try {
         const data = await CourseChapterContent.findAll({
            include: [{
                model: LearnProgress,
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
        let data = await CourseChapterContent.findByPk(id, {
            include: [{
                model: LearnProgress,
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
        courseChapterId, 
        contentTypeId, 
        isMandatory,
        timeRequiredInSeconds,
        isOpenForFree
        } = req.body;
    const data = await CourseChapterContent.update({
        courseChapterId, 
        contentTypeId, 
        isMandatory,
        timeRequiredInSeconds,
        isOpenForFree
    }, {where: { id: id }});
    return res.send({user: data})
    } catch (error) {
        return res.status(500).send({message: "error retrieving for update"})
    }
   
}

exports.delete = async (req, res) => {
    const {id} = req.params;
    try {
        await CourseChapterContent.destroy({where: { id: id }})
        return res.status(200).send({message: "ok"})
    } catch (error) {
        return res.status(500).send({message: "error retrieving"})
    }
};

exports.deleteAll = async (req, res) => {
    try {
        await CourseChapterContent.destroy({
            where: {},
            truncate: false
          })
        return res.status(200).send({message: "ok"})
    } catch (error) {
        return res.status(500)
            .send({message: "error retrieving"})
    }
}


  