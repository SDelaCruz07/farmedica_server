const express = require('@awaitjs/express');
const router = express.Router();
const citexamen_controller = require("./citexamen_controller");
const { check } = require('express-validator');
const { validarCampos } = require('../../middleware/validate_campos');
const auth = require('../../middleware/jwt');

router.getAsync("/list", [auth.checkjwt], citexamen_controller.listData);

router.postAsync("/create", [auth.checkjwt,
check('id_horario', 'Id horario es requerido').not().isEmpty(),
check('id_usuario', 'Id usuario es requerido').not().isEmpty(),
    validarCampos], citexamen_controller.create);

router.postAsync("/update", [auth.checkjwt,
check('fecha_postergacion', 'Fecha de postergacion es requerido').not().isEmpty(),
    validarCampos],
    citexamen_controller.update);

router.postAsync("/estado", [auth.checkjwt,
check('estado', 'Estado es requerido').not().isEmpty(),
    validarCampos],
    citexamen_controller.estado);

module.exports = router;