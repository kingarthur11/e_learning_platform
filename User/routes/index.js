module.exports = app => {
    const UserCont = require("../controller"); 
    // const auth = require('../../middleware/auth')
    const {emailDuplicate} = require('../../middleware/userAuth') 
    var router = require("express").Router();

    router.post("/signup", [emailDuplicate.checkSignupEmailAndPassword], UserCont.signup);
    router.post("/login", [emailDuplicate.checkSignupEmailAndPassword], UserCont.login);
    // router.post("/forgotpassword", UserCont.forgotPassword);    
    // router.post("/resetpassword", UserCont.resetPassword);
    // router.get("/", UserCont.findAll);
    // router.get("/:id", UserCont.findOne);
    // router.put('/:id', UserCont.update);
    // router.delete('/', UserCont.deleteAll);
    // router.delete('/:id', UserCont.delete);
      
    app.use('/api/user', router);
  };