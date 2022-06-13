const Admin = require('../models/adminModel')
const bcryptjs = require('bcryptjs')
// Get all admins
const getAllAdmins = async (req, res) => {
    
    let data = await Admin.find()
    res.status(200).json(data)
}

// Get all admins
const getSingleAdmin = async (req, res) => {

    // Hash password
    let uName = req.params.uName

    let data = await Admin.findOne({uName})
    res.status(200).json(data)
}

// Get all admins
const createAdmin = async (req, res) => {

    const { name, email, uName, cell, password } = req.body

    if(name && email && uName && cell && password){
        // Hash password
        const hash = await bcryptjs.hash(password, 12)

        // Admin create
        await Admin.create({ ...req.body, password: hash })
        res.status(200).json('Admin add successfully')

    }else{
        res.status(400).json('All fields are required')
    }
    
}

// Get all admins
const updateAdmin = async (req, res) => {

    const { password } = req.body
    let id = req.params.id

    // Hash password
    const hash = await bcryptjs.hash(password, 12)
    
    await Admin.findByIdAndUpdate(id, { ...req.body, password: hash }, { new: true })
    res.status(200).json('Admin Data update successfully')
}

// Get all admins
const deleteAdmin = async (req, res) => {

    let id = req.params.id
    let data = await Admin.findById(id)

    if (data) {
        await Admin.findByIdAndDelete(id)
        res.status(200).json('Admin Data Delete successfully')
    } else {
        res.status(404).json('Data not found')
    }
}


// Admin profile
const adminProfile = async (req, res) => {
    res.status(200).json(req.user)
}

// Admin friends
const adminFriends = async (req, res) => {
    res.status(200).json(req.user)
}


module.exports = {getAllAdmins, getSingleAdmin, createAdmin, updateAdmin, deleteAdmin, adminProfile, adminFriends}