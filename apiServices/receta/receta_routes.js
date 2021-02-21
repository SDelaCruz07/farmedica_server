const express = require('@awaitjs/express');
const router = express.Router();
const receta_controller = require("./receta_controller");
const { check } = require('express-validator');
const { validarCampos } = require('../../middleware/validate_campos');
const auth = require('../../middleware/jwt');

router.getAsync("/list", [auth.checkjwt], receta_controller.list);
router.getAsync("/listUsuario", [auth.checkjwt], receta_controller.listUsuario);

// router.postAsync("/create", [auth.checkjwt,
// check('descripcion', 'Descripcion es requerido').not().isEmpty(),
// check('nombre', 'Nombre es requerido').not().isEmpty(),
// check('imagen', 'Imagen es requerido').not().isEmpty(),
//     validarCampos], receta_controller.create);

// router.postAsync("/update", [auth.checkjwt,
// check('descripcion', 'Descripcion es requerido').not().isEmpty(),
// check('nombre', 'Nombre es requerido').not().isEmpty(),
// check('imagen', 'Imagen es requerido').not().isEmpty(),
//     validarCampos],
//     receta_controller.update);

// router.postAsync("/delete", [auth.checkjwt],
//     receta_controller.delete);

module.exports = router;