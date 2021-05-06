const jwt = require('jsonwebtoken');
const {User} = require('../models')
const {
    TOKEN_SECRET,
} = process.env;

const generateUserToken = (user) => {
    return jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        user
      }, TOKEN_SECRET);
  };
const checkSignupEmailAndPassword = async (req, res, next) => {  
    const {password, confirm_password, email, } = req.body;
    const emailExists = await User.findOne({where: {email}});
    if(password !== confirm_password) return res.status(400).json({message: 'password does not match'})
    if(emailExists) return res.status(400).send("A User account with this email already exists");
    next();
}
const emailDuplicate = {
    checkSignupEmailAndPassword,
}

module.exports = 
{
    generateUserToken,
    emailDuplicate
};