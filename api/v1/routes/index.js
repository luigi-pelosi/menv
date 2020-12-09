const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

router.get(
    '/users',
    userController.proceed,
    userController.grant('readAny', 'profile'),
    userController.getAll
)
router.get(
    '/user/:userId',
    userController.proceed,
    userController.get
)
router.post('/auth/register', userController.register)
router.post('/auth/login', userController.login)
router.put(
    '/user/:userId',
    userController.proceed,
    userController.grant('updateAny', 'profile'),
    userController.update
)
router.delete(
    '/user/:userId',
    userController.proceed,
    userController.grant('deleteAny', 'profile'),
    userController.remove
)

module.exports = router