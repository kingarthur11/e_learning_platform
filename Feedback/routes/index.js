module.exports = app => {
  const FeedbackController = require("../controller");
  var router = require("express").Router();
  
  router.get('/', FeedbackController.findAll);
  router.post('/', FeedbackController.create);
  router.get('/:id', FeedbackController.findOne);
  router.put('/:id', FeedbackController.update);
  router.delete('/', FeedbackController.deleteAll);
  router.delete('/:id', FeedbackController.delete);
        
    app.use('/api/feedback', router);
    };