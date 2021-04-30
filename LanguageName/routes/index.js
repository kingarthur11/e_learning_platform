module.exports = app => {
  const LanguageNameController = require("../controller");
  var router = require("express").Router();
  
  router.get('/', LanguageNameController.findAll);
  router.post('/', LanguageNameController.created);
  router.get('/:id', LanguageNameController.findOne);
  router.put('/:id', LanguageNameController.update);
  router.delete('/', LanguageNameController.deleteAll);
  router.delete('/:id', LanguageNameController.delete);
        
    app.use('/api/languagename', router);
    };