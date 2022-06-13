const adminModel = require("../models/adminModel");
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Admin login system
const adminLogin = async (req, res) => {

    const {email, password} = req.body

    // Check admin by email
    const data = await adminModel.findOne({email})

    let pass = data ? data.password : ''

    // Check password
    const hash_pass = await bcryptjs.compare(password, pass)

    if (hash_pass) {
        const token = jwt.sign({ id: data._id }, process.env.JWT_SECRET, { expiresIn : '1d' })
        res.status(200).json({ id : data._id, name: data.name, email: data.email, token })
    } else {
        res.status(401).json('Email or Password wrong')
    }
    
}


module.exports = {adminLogin}