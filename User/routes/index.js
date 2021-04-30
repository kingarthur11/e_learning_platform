module.exports = app => {
    const UserCont = require("../controller"); 
    const auth = require('../../middleware/auth') 
    var router = require("express").Router();

    router.post("/signup", UserCont.signup);
    router.post("/login", UserCont.login);
    router.post("/forgotpassword", UserCont.forgotPassword);    
    router.post("/resetpassword", UserCont.resetPassword);
    router.get("/", UserCont.findAll);
    // router.get("/:id", auth, UserCont.findOne);
      
    app.use('/api/user', router);
  };