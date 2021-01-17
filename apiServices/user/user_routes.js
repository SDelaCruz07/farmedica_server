const express = require('@awaitjs/express');
const router = express.Router();
const user_controller = require("./user_controller");
const { check } = require('express-validator');
const { validarCampos } = require('../../middleware/validate_campos');
const auth = require('../../middleware/jwt');
router.postAsync("/create", /*[auth.checkjwt] ,*/[
    check('username', 'Username es requerido').not().isEmpty(),
    check('password', 'Password es requerido').not().isEmpty(),
    check('dni', 'Dni es requerido').not().isEmpty(),
    check('dni', 'Dni incorrecto').isLength({ min: 8 }),
    check('imagen', 'Foto es requerido').not().isEmpty(),
    check('nombre', 'Nombre es requerido').not().isEmpty(),
    check('apellido', 'Apellido es requerido').not().isEmpty(),
    check('telefono', 'Telefono es requerido').not().isEmpty(),
    check('correo', 'Correo es requerido').not().isEmpty(),
    check('correo', 'Correo incorrecto').isEmail(),
    validarCampos], user_controller.create);
router.postAsync("/update", [auth.checkjwt,
    check('username', 'Username es requerido').not().isEmpty(),
    //check('password', 'Password es requerido').not().isEmpty(),
    //check('dni', 'Dni es requerido').not().isEmpty(),
    check('imagen', 'Foto es requerido').not().isEmpty(),
    check('nombre', 'Nombre es requerido').not().isEmpty(),
    check('apellido', 'Apellido es requerido').not().isEmpty(),
    check('telefono', 'Telefono es requerido').not().isEmpty(),
    check('correo', 'Correo es requerido').not().isEmpty(),
    check('correo', 'Correo incorrecto').isEmail(),
    validarCampos],
    user_controller.update);
router.getAsync("/getData",[auth.checkjwt],  user_controller.getdata);

module.exports = router;