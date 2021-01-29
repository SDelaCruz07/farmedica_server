var express = require('express');
var router = express.Router();

const auth = require('../apiServices/auth/auth_routes');
const user = require('../apiServices/user/user_routes');
const cita = require('../apiServices/cita/cita_routes');
const area = require('../apiServices/area/area_routes');
const doctor = require('../apiServices/doctor/doctor_routes');

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

module.exports = router;
