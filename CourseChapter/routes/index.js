module.exports = app => {
  const CourseChapterController = require("../controller");
  var router = require("express").Router();
  
  router.get('/', CourseChapterController.findAll);
  router.post('/', CourseChapterController.create);
  router.get('/:id', CourseChapterController.findOne);
  router.put('/:id', CourseChapterController.update);
  router.delete('/', CourseChapterController.deleteAll);
  router.delete('/:id', CourseChapterController.delete);
        
    app.use('/api/coursechapter', router);
    };