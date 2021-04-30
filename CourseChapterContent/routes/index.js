module.exports = app => {
  const CourseChapterContentController = require('../controller');
  var router = require("express").Router();
  
  router.get('/', CourseChapterContentController.findAll);
  router.post('/', CourseChapterContentController.create);
  router.get('/:id', CourseChapterContentController.findOne);
  router.put('/:id', CourseChapterContentController.update);
  router.delete('/', CourseChapterContentController.deleteAll);
  router.delete('/:id', CourseChapterContentController.delete);
        
    app.use('/api/courseChapterContent', router);
    };