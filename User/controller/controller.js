// const {loginValidate, signupValidate, resetPasswordValidate} = require('./check')
// const byCrypT = require('bcrypt')
// const {User, Enrollment} = require("../../models");
// const jwt = require('jsonwebtoken');
// const nodemailer = require('nodemailer')
// const crypto = require('crypto');
// const {google} = require('googleapis');
// require("dotenv").config();

// const {
//     TOKEN_SECRET,
//     MAIL_USERNAME,
//     MAIL_PASSWORD,
//     OAUTH_CLIENTID,
//     OAUTH_CLIENT_SECRET,
//     OAUTH_REFRESH_TOKEN,
//     REDIRECT_URI
// } = process.env;

// exports.signup = async (req, res) => {
//     try {
//         const {firstName, lastName, password, confirm_password, email, } = req.body;
//         const {error} = signupValidate.validate(req.body, {allowUnknown: true})
//         if (error) return res.status(400).send(error.details[0].message);  
//         const emailExists = await User.findOne({where: {email}});
//         if(password !== confirm_password) return res.status(400).json({message: 'password does not match'})
//         if(emailExists) return res.status(400).send("A User account with this email already exists"); 
//         const salt = await byCrypT.genSalt(10);
//         const hashPwd = await byCrypT.hash(password, salt)
//         const user = await signUpUser({
//             lastName,
//             firstName,
//             email,
//             password: hashPwd,
//             confirm_password });
//         const token = jwt.sign({id: user.id, email: user.email, 
//             exp: Math.floor(Date.now() / 1000) + (60 * 10)}, 
//             process.env.TOKEN_SECRET); 
//         return res.status(200).json({ status: "Success", user, token });
//     } catch (error) {
//         res.status(500).json({message: 'something went wrong'})
//     }
    
// };

// exports.login = async (req, res) => {
//     try {
//         const {password, email } = req.body;
//         const {error} = loginValidate.validate(req.body, {allowUnknown: true});
//         if(error) return res.status(400).send(error.details[0].message);
//         const user = await User.findOne({where: {email}});
//         if(!user) return res.status(400).send("Email is not correct");
//         const validPassword = await byCrypT.compare(password, user.password);
//         if(!validPassword) return res.status(400).send("Invalid password");
//         const token = jwt.sign({id: user.id, email: user.email, 
//             exp: Math.floor(Date.now() / 1000) + (60 * 10)}, 
//             TOKEN_SECRET); 
//         return res.status(200).json({ status: "Success", user, token });
//     } catch (error) {
//         res.status(500).json({message: 'something went wrong'})
//     }
// };

// exports.findAll = async (req, res) => {
//      try {
//          const user = await User.findAll({
//             attributes: ['firstName', 'lastName', 'password', 'confirm_password', 'email'],
//             include: [{
//                 model: Enrollment,
//               }]
//          });
//          res.send({users: user})
//      } catch(error) {
//          res.status(500).send({
//              message: error.message || "soething went wrong"
//          })
//      }
//  };

//  exports.findOne = async (req, res) => {
//     const {id} = req.params;
//     try {
//         let data = await User.findByPk(id, {
//             attributes: ['firstName', 'lastName', 'password', 'confirm_password', 'email'],
//             include: [{
//                 model: Enrollment
//               }]
//         });
//         return res.status(200).json(data);      
//     } catch (error) {
//         return res.status(500).send({message: "error retrieving"})
//     }
// };

// exports.forgotPassword = async (req, res) => {
//     try {
//         const {email } = req.body;
//         const {error} = resetPasswordValidate.validate(req.body, {allowUnknown: true});
//         if(error) return res.status(400).send(error.details[0].message);
//         const user = await User.findOne({where: {email}});
//         if(!user) return res.status(400).send("Email is not correct");
//         const token = crypto.randomBytes(20).toString('hex');
//         User.update({
//             resetPassword: token,
//             resetPasswordExpires: Date.now() + 60000},
//             { where: { email } }
//         );
//         const OAuth2Client = new google.auth.OAuth2(OAUTH_CLIENTID, OAUTH_CLIENT_SECRET, REDIRECT_URI)
//         OAuth2Client.setCredentials({ refresh_token: OAUTH_REFRESH_TOKEN})
//         const accessToken = await OAuth2Client.getAccessToken()
//         console.log(accessToken)
//         const transporter = nodemailer.createTransport({
//             service: 'gmail', 
//             auth: {
//                 type: 'OAuth2',
//                 user: MAIL_USERNAME,
//                 pass: MAIL_PASSWORD,
//                 clientId: OAUTH_CLIENTID,
//                 clientSecret: OAUTH_CLIENT_SECRET,
//                 refreshToken: OAUTH_REFRESH_TOKEN,
//                 accessToken: accessToken
//             }
//         });
//         const mailOption = {
//             from: MAIL_USERNAME,
//             to: `${user.email}`,
//             subject: 'Link to reset password',
//             text: 'you are receiving this beacuse you (or someone else) have requested the reset of the password.\n\n'
//             + 'Please click on the following link, or past this into your browser to complete the process within 1 minuteof receiving this mail:\n\n'
//             + `http://localhost:3000/reset/${token}\n\n`
//             + 'if you did not request this, please ignore this mail and your password will remain unchanged.\n'
//           }
//         console.log('mail sent');
//         transporter.sendMail(mailOption, (err, res) => {
//             if(err) {
//                 console.log('there was an error: ', err)
//             } else {
//                 console.log('here is the response: ', res)
//                 res.status(200).json('reovery email sent')
//             }
//         }) 
//     } catch (error) {
//         res.status(500).json({message: 'something went wrong'})
//     }    
// };

// exports.resetPassword = async (req, res) => {
//     try {
//         const {password, confirm_password, token } = req.body;
//         const user = await User.findOne({where: {resetPassword: token}});
//         if(!user) return res.status(400).send("token has expired or does not exist, try again");
//         if(password !== confirm_password) return res.status(400).json({message: 'password does not match'})
//         const salt = await byCrypT.genSalt(10);
//         const hashPwd = await byCrypT.hash(password, salt)
//         User.update({
//             password: hashPwd,
//             confirm_password,
//         }, {where: {resetPassword: token}} )
//     } catch (error) {
//         res.status(500).json({message: 'something went wrong'})
//     } 
// } 

// exports.update = async (req, res) => { 
//     const {firstName, lastName, email, } = req.body;
//     try {
//         if(!req.body){
//             return res.status(400).send({message: 'Data to update cannot be empty'})
//         }
//         const {id} = req.params;
//         const data = await User.update({
//             lastName,
//             firstName,
//             email,
//             }, {where: { id: id }});
//             return res.send({user: data})
//     } catch (error) {
//         return res.status(500).send({message: "error retrieving for update"})
//     }
// }

// exports.delete = async (req, res) => {
//     const {id} = req.params;
//     try {
//         await User.destroy({where: { id: id }})
//         return res.status(200).send({message: "ok"})
//     } catch (error) {
//         return res.status(500).send({message: "error retrieving"})
//     }
// }

// exports.deleteAll = async (req, res) => {
//     try {
//         await User.destroy({
//             where: {},
//             truncate: false
//           })
//         return res.status(200).send({message: "ok"})
//     } catch (error) {
//         return res.status(500)
//             .send({message: "error retrieving"})
//     }
// }


  
