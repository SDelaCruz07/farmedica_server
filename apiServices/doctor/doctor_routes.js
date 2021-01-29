const express = require('@awaitjs/express');
const router = express.Router();
const doctor_controller = require("./doctor_controller");
const { check } = require('express-validator');
const { validarCampos } = require('../../middleware/validate_campos');
const auth = require('../../middleware/jwt');

router.postAsync("/list", [auth.checkjwt,
check('area', 'Id area es requerido').not().isEmpty(),
check('fecha', 'Fecha es requerido').not().isEmpty(),
    validarCampos], doctor_controller.list);

router.postAsync("/create", [auth.checkjwt,
check('nombre', 'Nombre es requerido').not().isEmpty(),
check('apellido', 'Apellido es requerido').not().isEmpty(),
check('carnet', 'Carnet es requerido').not().isEmpty(),
check('area', 'Id area es requerido').not().isEmpty(),
check('imagen', 'Imagen es requerido').not().isEmpty(),
    validarCampos], doctor_controller.create);

router.postAsync("/update", [auth.checkjwt,
check('nombre', 'Nombre es requerido').not().isEmpty(),
check('apellido', 'Apellido es requerido').not().isEmpty(),
check('area', 'Id area es requerido').not().isEmpty(),
check('imagen', 'Imagen es requerido').not().isEmpty(),
    validarCampos],
    doctor_controller.update);

router.postAsync("/delete", [auth.checkjwt],
    doctor_controller.delete);

module.exports = router;