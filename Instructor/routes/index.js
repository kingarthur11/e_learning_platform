module.exports = app => {
  const InstructorController = require("../controller");
  var router = require("express").Router();
  
  router.get('/', InstructorController.findAll);
  router.post('/', InstructorController.create);
  router.get('/:id', InstructorController.findOne);
  router.put('/:id', InstructorController.update);
  router.delete('/', InstructorController.deleteAll);
  router.delete('/:id', InstructorController.delete);
        
    app.use('/api/instructor', router);
    };