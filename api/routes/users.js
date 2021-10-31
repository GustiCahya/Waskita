const { Router } = require('express')
require('../config')

const router = Router()

// Initialize Controller
const usersController = require('../controllers/usersController')

// Register
router.post('/users/register', usersController.register)

// Login
router.post('/users/login', usersController.login)

// Get User
router.get('/users/user', usersController.user)

module.exports = router
