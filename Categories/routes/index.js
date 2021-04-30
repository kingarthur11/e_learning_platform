module.exports = app => {
const CatController = require("../controller");
var router = require("express").Router();

router.get('/', CatController.findAll);
router.post('/', CatController.create);
router.get('/:id', CatController.findOne);
router.put('/:id', CatController.update);
router.delete('/', CatController.deleteAll);
router.delete('/:id', CatController.delete);
      
  app.use('/api/categories', router);
  };