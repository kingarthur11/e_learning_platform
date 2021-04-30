module.exports = app => {
  const LearnProgressController = require("../controller");
  var router = require("express").Router();
  
  router.get('/', LearnProgressController.findAll);
  router.post('/', LearnProgressController.create);
  router.get('/:id', LearnProgressController.findOne);
  router.put('/:id', LearnProgressController.update);
  router.delete('/', LearnProgressController.deleteAll);
  router.delete('/:id', LearnProgressController.delete);
        
    app.use('/api/learnProgress', router);
    };