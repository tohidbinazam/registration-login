const jwt = require('jsonwebtoken');
const adminModel = require('../models/adminModel');


// Auth Middleware
const authCheck = async (req, res, next) => {
    
    const token = req.headers.authorization.split(' ')[1]
    const verify = jwt.verify(token, process.env.JWT_SECRET)

    if (token && verify) {
        req.user = await adminModel.findById(verify.id)
        console.log('ok');
        next()
    } else {
        console.log('wrong');
    }
}

module.exports = { authCheck }