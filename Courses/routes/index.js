module.exports = app => {
  const CourseController = require("../controller");
  var router = require("express").Router();
  
  router.get('/', CourseController.findAll);
  router.post('/', CourseController.create);
  router.get('/:id', CourseController.findOne);
  router.put('/:id', CourseController.update);
  router.delete('/', CourseController.deleteAll);
  router.delete('/:id', CourseController.delete);
        
    app.use('/api/course', router);
    };