const {Instructor, Course} = require('../../models');

exports.create = async (req, res) => {
    const {
        firstname, 
        lastname, 
        email,
        qualification,
        introductionBrief,
        numberOfPublishedCourses,
        numberOfEnrolledStudents,
        averageReviewRatings,
        numberOfReviews
    } = req.body;
    try {
    const data = await Instructor.create({
        firstname, 
        lastname, 
        email,
        qualification,
        introductionBrief,
        numberOfPublishedCourses,
        numberOfEnrolledStudents,
        averageReviewRatings,
        numberOfReviews  });
       return res.status(200).json(data)
    } catch (error) {
        return res.status(500).send({
        message: error.message || "some error occured while creating a course"
        });
    }
};

exports.findAll = async (req, res) => {
    try {
    const data = await Instructor.findAll({
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
        let data = await Instructor.findById(id, {
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
        firstname, 
        lastname, 
        email,
        qualification,
        introductionBrief,
        numberOfPublishedCourses,
        numberOfEnrolledStudents,
        averageReviewRatings,
        numberOfReviews
        } = req.body;
    const data = await Instructor.update({
        firstname, 
        lastname, 
        email,
        qualification,
        introductionBrief,
        numberOfPublishedCourses,
        numberOfEnrolledStudents,
        averageReviewRatings,
        numberOfReviews
        }, {where: { id: id }});
        return res.send({user: data})
    } catch (error) {
        return res.status(500).send({message: "error retrieving for update"})
    }
   
}

exports.delete = async (req, res) => {
    let {id} = req.params;
    try {
        await Instructor.destroy({where: { id: id }})
        return res.status(200).send({message: "ok"})
    } catch (error) {
        return res.status(500).send({message: "error retrieving"})
    }
}

exports.deleteAll = async (req, res) => {
    try {
        await Instructor.destroy({
            where: {},
            truncate: false
          })
        return res.status(200).send({message: "ok"})
    } catch (error) {
        return res.status(500)
            .send({message: "error retrieving"})
    }
}


  