const express = require('express');
const userController = require('../controllers/userController.js');
const router = express.Router();
router.get('/' , userController.index);
router.get('/auth/google' , userController.user_login);
router.get('/auth/google/callback' , userController.user_callback);
router.get('/auth/google/callback/success' , userController.login_success);
router.get('/error' , userController.login_failed);
router.get('/auth/logout' , userController.user_logout);
module.exports = router;