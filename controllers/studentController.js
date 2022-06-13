
const Student = require('../models/studentModel')

// Get all students
const getAllStudents = async (req, res) => {
    
    let data = await Student.find()
    res.status(200).json(data)
}
// Get single student
const getSingleStudent = async (req, res) => {

    username = req.params.username
    let data = await Student.findOne({ uName : username })
    res.status(200).json(data)
}
// Add new student
const createStudent = async (req, res) => {
    
    await Student.create(req.body)
    res.status(200).json({ message : 'Student data add successfully'})
}

// Edit student
const editStudent = async (req, res) => {

    id = req.params.id
    await Student.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json({ message : 'Student Update successfully'})
}
// Delete student
const deleteStudent = async (req, res) => {
    
    id = req.params.id
    await Student.findByIdAndDelete(id)
    res.status(200).json({ message : 'Student Delete successfully' })
}

module.exports = {getAllStudents, getSingleStudent, createStudent, editStudent, deleteStudent}