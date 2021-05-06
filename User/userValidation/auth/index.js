const Joi = require('joi');

module.exports = {
    name: Joi.string().min(2).max(60).required(),
    text: Joi.string().required(),
    textOptional: Joi.string().optional(),
    email: Joi.string()
        .email({
            minDomainSegments: 2,
            tlds: { allow: true },
        })
        .trim()
        .required(),
    emailOptional: Joi.string()
        .email({
            minDomainSegments: 2,
            tlds: { allow: true },
        })
        .trim()
        .optional(),
  number: Joi.number().positive().allow(0).required(),
  numberOptional: Joi.number().positive().allow(0).optional(),
  nameOptional: Joi.string().alphanum().min(3).max(30).optional(),
  url: Joi.string().uri().required(),
  urlOptional: Joi.string().uri().optional(),
  array: Joi.array().required(),
  boolean: Joi.boolean().required(),
  json: Joi.object().required(),
  password: Joi.string().trim().required().min(8).messages({
    'string.empty': 'Password should not be empty!',
    'string.min': `Password should have at least 8 characters!`,
  }),
  date: Joi.date().required(),
  dateOptional: Joi.date().optional(),
  phoneNo: Joi.string().required(),
  stringOptional: Joi.string().trim().min(1).optional(),
  image: Joi.any()
    .meta({ swaggerType: 'file' })
    .required()
    .allow('')
    .description('image file'),
};