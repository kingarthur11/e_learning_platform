'use strict';

module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('course', {
    courseTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    courseBrief: {
      type: DataTypes.STRING,
      allowNull: false
    },
    instructorId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    languageId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    numberOfChapters: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    courseFee: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    paranoid: true
  });

  Course.associate = (models) => {
    Course.belongsTo(models.Instructor, {
      foreignKey: {
        name: 'instructorId',
        allowNull: false
      },
      as: 'course'
    });
    Course.belongsTo(models.LanguageName, {
      foreignKey: {
        name: 'languageId',
        allowNull: false
      },
      as: 'course'
    });
    Course.belongsTo(models.Categories, {
      foreignKey: {
        name: 'categoryId',
        allowNull: false
      },
      as: 'course'
    });
    Course.hasMany(models.CourseChapter, {
      foreignKey: {
        name: 'courseId',
        allowNull: false
      },
      as: 'courseChapter'
    });
    Course.hasMany(models.Enrollment, {
      foreignKey: {
        name: 'courseId',
        allowNull: false
      },
      as: 'enrollment'
    });
  };

  return Course;
};