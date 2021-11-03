const { Router } = require('express')
require('../services/auth')

const router = Router()

// Initialize Controller
const Users = require('../controllers/Users')

// Register
router.post('/Users/register', Users.register)

// Login
router.post('/Users/login', Users.login)

// Get User
router.get('/Users/user', Users.user)

module.exports = router
