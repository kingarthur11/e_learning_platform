module.exports = app => {
  const EnrollmentController = require("../controller");
  var router = require("express").Router();
  
  router.get('/', EnrollmentController.findAll);
  router.post('/', EnrollmentController.create);
  router.get('/:id', EnrollmentController.findOne);
  router.put('/:id', EnrollmentController.update);
  router.delete('/', EnrollmentController.deleteAll);
  router.delete('/:id', EnrollmentController.delete);
        
    app.use('/api/enrollment', router);
    };