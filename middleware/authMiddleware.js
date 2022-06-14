const jwt = require('jsonwebtoken');
const adminModel = require('../models/adminModel');


// Auth Middleware
const authCheck = async (req, res, next) => {
    

    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1]
        try{
            const verify = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await adminModel.findById(verify.id)
            next()
        }catch(error){
            res.status(200).json(error.message)
        }
    } else {
        res.status(200).json('Token missing')
    }

}

module.exports = { authCheck }