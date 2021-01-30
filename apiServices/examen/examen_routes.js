const express = require('@awaitjs/express');
const router = express.Router();
const examen_controller = require("./examen_controller");
const { check } = require('express-validator');
const { validarCampos } = require('../../middleware/validate_campos');
const auth = require('../../middleware/jwt');

router.postAsync("/list", [auth.checkjwt,
check('area', 'Id area es requerido').not().isEmpty(),
check('fecha', 'Fecha es requerido').not().isEmpty(),
    validarCampos], examen_controller.list);

router.postAsync("/create", [auth.checkjwt,
check('nombre', 'Nombre es requerido').not().isEmpty(),
check('descripcion', 'Descripcion es requerido').not().isEmpty(),
check('imagen', 'Imagen es requerido').not().isEmpty(),
check('area', 'Id area es requerido').not().isEmpty(),
check('precio', 'Precio es requerido').not().isEmpty(),
    validarCampos], examen_controller.create);

router.postAsync("/update", [auth.checkjwt,
check('nombre', 'Nombre es requerido').not().isEmpty(),
check('descripcion', 'Descripcion es requerido').not().isEmpty(),
check('imagen', 'Imagen es requerido').not().isEmpty(),
check('area', 'Id area es requerido').not().isEmpty(),
check('precio', 'Precio es requerido').not().isEmpty(),
    validarCampos],
    examen_controller.update);

router.postAsync("/delete", [auth.checkjwt],
    examen_controller.delete);

module.exports = router;