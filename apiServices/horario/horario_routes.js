const express = require('@awaitjs/express');
const router = express.Router();
const horario_controller = require("./horario_controller");
const { check } = require('express-validator');
const { validarCampos } = require('../../middleware/validate_campos');
const auth = require('../../middleware/jwt');

router.postAsync("/list", [auth.checkjwt,
check('id_doctor', 'Id doctor es requerido').not().isEmpty(),
check('fecha', 'Fecha es requerido').not().isEmpty(),
    validarCampos], horario_controller.list);

router.postAsync("/create", [auth.checkjwt,
check('fecha', 'Fecha es requerido').not().isEmpty(),
check('hora_inicio', 'Hora de inicio es requerido').not().isEmpty(),
check('hora_fin', 'Hora de fin es requerido').not().isEmpty(),
check('consultorio', 'Consultorio es requerido').not().isEmpty(),
check('id_doctor', 'ID doctor es requerido').not().isEmpty(),
    validarCampos], horario_controller.create);

router.postAsync("/update", [auth.checkjwt,
check('fecha', 'Fecha es requerido').not().isEmpty(),
check('hora_inicio', 'Hora de inicio es requerido').not().isEmpty(),
check('hora_fin', 'Hora de fin es requerido').not().isEmpty(),
check('consultorio', 'Consultorio es requerido').not().isEmpty(),
check('id_doctor', 'ID doctor es requerido').not().isEmpty(),
    validarCampos],
    horario_controller.update);

router.postAsync("/delete", [auth.checkjwt],
    horario_controller.delete);

module.exports = router;