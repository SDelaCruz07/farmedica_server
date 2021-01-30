const express = require('@awaitjs/express');
const router = express.Router();
const requisito_controller = require("./requisito_controller");
const { check } = require('express-validator');
const { validarCampos } = require('../../middleware/validate_campos');
const auth = require('../../middleware/jwt');

router.getAsync("/list", [auth.checkjwt], requisito_controller.list);

router.postAsync("/create", [auth.checkjwt,
check('descripcion', 'Descripcion es requerido').not().isEmpty(),
check('examen', 'Id examen es requerido').not().isEmpty(),
    validarCampos], requisito_controller.create);

router.postAsync("/update", [auth.checkjwt,
check('descripcion', 'Descripcion es requerido').not().isEmpty(),
check('examen', 'Id examen es requerido').not().isEmpty(),
    validarCampos],
    requisito_controller.update);

router.postAsync("/delete", [auth.checkjwt],
    requisito_controller.delete);

module.exports = router;