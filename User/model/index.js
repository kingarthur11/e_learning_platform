const {User, Enrollment} = require('../../Models');

module.exports = {
    signUpUser: async (data) => {
        return User.create(data);
    },
    getAllProperties: async () => {
        return User.findAll({
          attributes: ['firstname', 'lastname', 'password', 'confirm_password', 'email'],
          include: [{
              model: Enrollment,
            }]
       });
    },
    getProperty: async (id) => {
        return User.findByPk(id, {
          attributes: ['firstName', 'lastName', 'password', 'confirm_password', 'email'],
          include: [{
              model: Enrollment
            }]
      });
  }
};

