var express = require('express');
var router = express.Router();

const auth = require('../apiServices/auth/auth_routes');
const user = require('../apiServices/user/user_routes');
const cita = require('../apiServices/cita/cita_routes');
const area = require('../apiServices/area/area_routes');
const doctor = require('../apiServices/doctor/doctor_routes');
const horario = require('../apiServices/horario/horario_routes');
const requisito = require('../apiServices/requisito/requisito_routes');
const cita_examen = require('../apiServices/cita_examen/citexamen_routes');
const examen = require('../apiServices/examen/examen_routes');
const receta = require('../apiServices/receta/receta_routes');

/* GET home page. */
//AUNTETICACION-----------------------------------
router.use('/auth', auth);
//USUARIO-----------------------------------------
router.use('/user', user);
//CITA-----------------------------------------
router.use('/cita', cita);
//AREA-----------------------------------------
router.use('/area', area);
//DOCTOR-----------------------------------------
router.use('/doctor', doctor);
//HORARIO-----------------------------------------
router.use('/horario', horario);
//REQUISITO-----------------------------------------
router.use('/requisito', requisito);
//REQUISITO-----------------------------------------
router.use('/cita_examen', cita_examen);
//EXAMEN-----------------------------------------
router.use('/examen', examen);
//RECETA-----------------------------------------
router.use('/receta', receta);

module.exports = router;
