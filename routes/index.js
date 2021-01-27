var express = require('express');
var router = express.Router();

const auth = require('../apiServices/auth/auth_routes');
const user = require('../apiServices/user/user_routes');
const cita = require('../apiServices/cita/cita_routes');

/* GET home page. */
//AUNTETICACION-----------------------------------
router.use('/auth', auth);
//USUARIO-----------------------------------------
router.use('/user', user);
//CITA-----------------------------------------
router.use('/cita', cita);

module.exports = router;
