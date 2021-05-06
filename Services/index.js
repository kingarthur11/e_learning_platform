// const {loginValidate, signupValidate, resetPasswordValidate} = require('./check')
// const byCrypT = require('bcrypt')
// const {User, Enrollment} = require("../../models");
// const jwt = require('jsonwebtoken');
// const nodemailer = require('nodemailer')
// const crypto = require('crypto');
// const {google} = require('googleapis');
// require("dotenv").config();

// module.exports = {
//     signUpUser: async (data) => {
//         return User.create(data);
//     },
//     getAllProperties: async () => {
//         return User.findAll({
//           attributes: ['firstName', 'lastName', 'password', 'confirm_password', 'email'],
//           include: [{
//               model: Enrollment,
//             }]
//        });
//     },
//     getProperty: async (id) => {
//         return User.findByPk(id, {
//           attributes: ['firstName', 'lastName', 'password', 'confirm_password', 'email'],
//           include: [{
//               model: Enrollment
//             }]
//       });
//   }
// };