const Joi = require('joi');

const signupValidate = Joi.object({
    firstname: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    lastname: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, 
            tlds: { allow: ['com', 'net'] } }),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    });

const loginValidate = Joi.object({
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    email: Joi.string()
        .email({ minDomainSegments: 2, 
            tlds: { allow: ['com', 'net'] } }), 
    })
const resetPasswordValidate = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, 
            tlds: { allow: ['com', 'net'] } }), 
    })
    
module.exports = 
{
    signupValidate, 
    loginValidate, 
    resetPasswordValidate 
};