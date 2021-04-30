const {Enrollment, Feedback, LearnProgress} = require('../../models');

exports.create = async (req, res) => {
    const {
        userId, 
        courseId, 
        isPaidSubscription
    } = req.body;
    try {
    const data = await Enrollment.create({
        userId, 
        courseId, 
        isPaidSubscription  });
       return res.status(200).json(data)
    } catch (error) {
        return res.status(500).send({
        message: error.message || "some error occured while creating a course"
        });
    }
};

exports.findAll = async (req, res) => {
     try {
         const data = await Enrollment.findAll({
            include: [{
                model: Feedback,
              },{
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
        let data = await Enrollment.findByPk(id, {
            include: [{
                model: CourseChapter,
                as: 'courseChapter'
              },{
                model: Enrollment,
                as: 'enrollment'
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
            userId, 
            courseId, 
            isPaidSubscription
        } = req.body;
        const data = await Enrollmentupdate({
            userId, 
            courseId, 
            isPaidSubscription
            }, {where: { id: id }});
            return res.send({user: data})
    } catch (error) {
        return res.status(500).send({message: "error retrieving for update"})
    }
   
}

exports.delete = async (req, res) => {
    let {id} = req.params;
    try {
        await Enrollment.destroy({where: { id: id }})
        return res.status(200).send({message: "ok"})
    } catch (error) {
        return res.status(500).send({message: "error retrieving"})
    }
}

exports.deleteAll = async (req, res) => {
    try {
        await Enrollment.destroy({
            where: {},
            truncate: false
          })
        return res.status(200).send({message: "ok"})
    } catch (error) {
        return res.status(500)
            .send({message: "error retrieving"})
    }
}


  