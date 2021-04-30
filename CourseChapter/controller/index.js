const {CourseChapterContent, CourseChapter} = require('../../models');

exports.create = async (req, res) => {
    const {
        chapterTitle,
        numberOfReviews, 
        numberOfVideos,
        numberOfAssignments,
        courseId
    } = req.body;
    try {
    const data = await CourseChapter.create({
        chapterTitle,
        numberOfReviews, 
        numberOfVideos,
        numberOfAssignments,
        courseId  });
    return res.status(200).json(data)
    } catch (error) {
        return res.status(500).send({
        message: error.message || "some error occured while creating a course"
        });
    }
};

exports.findAll = async (req, res) => {
     try {
         const data = await CourseChapter.findAll({
            include: [{
                model: CourseChapterContent,
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
        let data = await CourseChapter.findByPk(id, {
            include: [{
                model: CourseChapterContent,
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
        chapterTitle,
        numberOfReviews, 
        numberOfVideos,
        numberOfAssignments,
        courseId
        } = req.body;
    const data = await CourseChapter.update( {
        chapterTitle,
        numberOfReviews, 
        numberOfVideos,
        numberOfAssignments,
        courseId
        }, {where: { id: id }});
    return res.send({user: data})
    } catch (error) {
        return res.status(500).send({message: "error retrieving for update"})
    }
   
}

exports.delete = async (req, res) => {
    const {id} = req.params;
    try {
        await CourseChapter.destroy({where: { id: id }})
        return res.status(200).send({message: "ok"})
    } catch (error) {
        return res.status(500).send({message: "error retrieving"})
    }
}

exports.deleteAll = async (req, res) => {
    try {
        await CourseChapter.destroy({
            where: {},
            truncate: false
          })
        return res.status(200).send({message: "ok"})
    } catch (error) {
        return res.status(500)
            .send({message: "error retrieving"})
    }
}


  