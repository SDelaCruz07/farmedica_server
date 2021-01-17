var express = require('express');
var router = express.Router();

const auth = require('../apiServices/auth/auth_routes');
const user = require('../apiServices/user/user_routes');

/* GET home page. */
//AUNTETICACION-----------------------------------
router.use('/auth', auth);
//USUARIO-----------------------------------------
router.use('/user', user);

module.exports = router;
