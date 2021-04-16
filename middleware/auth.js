const jwt = require('jsonwebtoken');
require("dotenv").config();

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split("")[1]
        const isCustom = token.length < 500
        let decodedData;
        if(token && isCustom) {
            decodedData = jwt.verify(token, process.env.TOKEN_SECRET)
            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }

    } catch (error) {
        
    }
}