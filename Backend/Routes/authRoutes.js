const express = require('express');
const authController = require('../Controllers/auth_controller');
const router = express.Router();

router.post('/signup', authController.signup);
router.post('/signin', authController.login);
router.post('/forget-password', authController.forgotPassword);
router.patch('/reset-password/:token', authController.resetPassword);
router.get('/getall', authController.AllUsers);
router.delete('/delete/:id', authController.DeleteUser);
router.get('/current-user', authController.protect, authController.currentUser);
router.patch('/update-password', authController.protect, authController.updatePassword);
router.get('/logout', authController.protect, authController.logout);


module.exports = router;