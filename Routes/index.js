const express = require('express');
const user = require('../User/routes');
const category = require('../Categories/routes');
const coursechapter = require('../CourseChapter/routes');
const coursechaptercontent = require('../CourseChapterContent/routes');
const course = require('../Courses/routes');
const enrollment = require('../Enrollment/routes');
const feedback = require('../Feedback/routes');
const instructor = require('../Instructor/routes');
const languagename = require('../LanguageName/routes');
const learnprogress = require('../LearnProgress/routes');

const router = express.Router();
user(router);
category(router);
coursechapter(router);
coursechaptercontent(router);
course(router);
enrollment(router);
feedback(router);
instructor(router);
languagename(router);
learnprogress(router);

module.exports = router;