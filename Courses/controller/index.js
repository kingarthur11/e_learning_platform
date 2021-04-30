const {Course, CourseChapter, Enrollment} = require('../../models');

exports.create = async (req, res) => {
    
    const {
        courseTitle, 
        courseBrief, 
        instructorId,
        languageId,
        categoryId,
        numberOfChapters,
        courseFee
    } = req.body;
    
    try {
        const data = await Course.create({
            courseTitle, 
            courseBrief, 
            instructorId,
            languageId,
            categoryId,
            numberOfChapters,
            courseFee  
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
         const data = await Course.findAll({
            include: [{
                model: CourseChapter,
              },{
                model: Enrollment,
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
        let data = await Course.findByPk(id, {
            include: [{
                model: CourseChapter,
              },{
                model: Enrollment,
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
            courseTitle, 
            courseBrief, 
            instructorId,
            languageId,
            categoryId,
            numberOfChapters,
            courseFee
        } = req.body;
        const data = await Course.findByIdAndUpdate({
                courseTitle, 
                courseBrief, 
                instructorId,
                languageId,
                categoryId,
                numberOfChapters,
                courseFee
            }, {where: { id: id }});
            return res.send({user: data})
    } catch (error) {
        return res.status(500).send({message: "error retrieving for update"})
    }
   
}

exports.delete = async (req, res) => {
    let {id} = req.params;
    try {
        await Cours.destroy({where: { id: id }})
        return res.status(200).send({message: "ok"})
    } catch (error) {
        return res.status(500).send({message: "error retrieving"})
    }
}

exports.deleteAll = async (req, res) => {
    try {
        await Course.destroy({
            where: {},
            truncate: false
          })
        return res.status(200).send({message: "ok"})
    } catch (error) {
        return res.status(500)
            .send({message: "error retrieving"})
    }
}


  