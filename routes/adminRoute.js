const express = require('express');
const { getSingleAdmin, getAllAdmins, createAdmin, updateAdmin, deleteAdmin, adminProfile, adminFriends } = require('../controllers/adminController');
const { adminLogin } = require('../controllers/loginController');
const { authCheck } = require('../middleware/authMiddleware');
const router = express.Router()

// Admin profile
router.get('/profile', authCheck, adminProfile)
router.get('/friends', authCheck, adminFriends)

// Get admin route
router.get('/:uName', getSingleAdmin)

router.route('/').get(getAllAdmins).post(createAdmin)
router.route('/:id').patch(updateAdmin).delete(deleteAdmin)

// Admin login route
router.post('/login', adminLogin)



// Export admin route
module.exports = router