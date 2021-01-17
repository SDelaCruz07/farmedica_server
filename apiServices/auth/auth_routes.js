const express = require('@awaitjs/express');
const router = express.Router();
const authController = require("./auth_controller");
const auth = require('../../middleware/jwt');
const { check } = require('express-validator');
const { validarCampos } = require('../../middleware/validate_campos');

router.postAsync("/login", [
    check('username', 'Username es requerido').not().isEmpty(),
    check('password', 'Password es requerido').not().isEmpty(),
    validarCampos],
    authController.login);
router.getAsync("/refreshToken", [auth.checkjwt], authController.refreshToken)


module.exports = router;


