'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('Users', 'resetPasswordExpires', Sequelize.STRING);
  },

  down: async (queryInterface, Sequelize) => {}
};
