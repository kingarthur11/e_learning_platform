const Joi = require('joi');
const Format = require('../index');
const validator = require('../validator');


class UserValidation {
  static signupValidate(req, res, next) {
    const format = Joi.object().keys(
      {
        firstname: Format.name,
        lastname: Format.name,
        email: Format.email,
        password: Format.password,
      }, {}
    );
    validator(format, req.body, res, next);
  }

  static login(req, res, next) {
    const format = Joi.object().keys(
      {
        email: Format.email,
        password: Format.password,
      }, {}
    );
    validator(format, req.body, res, next);
  }

  static socialLogin(req, res, next) {
    const format = Joi.object().keys(
      {
        tokenId: Format.text,
      }, {}
    );
    validator(format, req.body, res, next);
  }
}

module.exports.UserValidation = UserValidation;
