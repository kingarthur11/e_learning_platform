'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
// var basename  = path.basename(module.filename);
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];

const db = {};



let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    // eslint-disable-next-line global-require,import/no-dynamic-require
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db.categories=require("./categories")(Sequlize,sequlize);
// db.course=require("./course")(Sequlize,sequlize);
// db.coursechapter=require("./coursechapter")(Sequlize,sequlize);
// db.coursechaptercontent=require("./coursechaptercontent")(Sequlize,sequlize);
// db.enrollment=require("./enrollment")(Sequlize,sequlize);
// db.feedback=require("./feedback")(Sequlize,sequlize);
// db.instructor=require("./instructor")(Sequlize,sequlize);
// db.languagename=require("./languagename")(Sequlize,sequlize);
// db.learnprogress=require("./learnprogress")(Sequlize,sequlize);
// db.user=require("./user")(Sequlize,sequlize);

// db.categories.hasMany(db.course, { foreignKey: 'categoryId', as: 'course'});

// db.course.belongsTo(db.categories, { foreignKey: 'categoryId', as: 'course' });
// db.course.belongsTo(db.instructor, { foreignKey: 'instructorId', as: 'course' });
// db.course.belongsTo(db.languagename, { foreignKey: 'languageId', as: 'course' });
// db.course.hasMany(db.coursechapter, { foreignKey: 'courseId', as: 'courseChapter' });
// db.course.hasMany(db.enrollment, { foreignKey: 'courseId', as: 'enrollment' });

// db.coursechapter.belongsTo(db.course, { foreignKey: 'courseId', as: 'courseChapter' });
// db.coursechapter.hasMany(db.coursechaptercontent, { foreignKey: 'courseChapterId', as: 'courseChapterContent' });

// db.coursechaptercontent.belongsTo(db.coursechapter, { foreignKey: 'courseChapterId', as: 'courseChapterContent' });
// db.coursechaptercontent.hasMany(db.learnprogress, { foreignKey: 'courseChapterContentId', as: 'learnProgress' });

// db.enrollment.belongsTo(db.course, { foreignKey: 'courseId', as: 'enrollment' });
// db.enrollment.hasMany(db.feedback, { foreignKey: 'enrollmentId', as: 'feedback' });
// db.enrollment.hasMany(db.learnprogress, { foreignKey: 'enrollmentId', as: 'learnProgress' });
// db.enrollment.belongsTo(db.user, { foreignKey: 'userId', as: 'enrollment' });

// db.feedback.belongsTo(db.enrollment, { foreignKey: 'enrollmentId', as: 'feedback' });

// db.instructor.hasMany(db.course, { foreignKey: 'instructorId', as: 'course' });

// db.languagename.hasMany(db.course, { foreignKey: 'languageId', as: 'course' });

// db.learnprogress.belongsTo(db.coursechaptercontent, { foreignKey: 'courseChapterContentId', as: 'learnProgress' });
// db.learnprogress.belongsTo(db.enrollment, { foreignKey: 'enrollmentId', as: 'learnProgress' });

// db.user.hasMany(db.enrollment, { foreignKey: 'userId', as: 'enrollment' });


module.exports = db;
