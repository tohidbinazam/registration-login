const express = require('express')
const router = express.Router()
const { getAllStudents, getSingleStudent, createStudent, editStudent, deleteStudent } = require('../controllers/studentController')

// Route request
router.get('/:username', getSingleStudent)
router.route('/').get(getAllStudents).post(createStudent)
router.route('/:id').patch(editStudent).delete(deleteStudent)

// export router
module.exports = router