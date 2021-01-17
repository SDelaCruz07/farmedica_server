const authModel = require('./auth_model');
const dto = require('./auth_dto');
const { generarToken } = require('./utils/generar_token');
const config = require('config');

module.exports = {
    async login(req, res) {
        const user = await authModel.login({
            username: req.body.username,
            password: req.body.password,
        });
        console.log(user)
        if (user == -1 || user == 0 || user == -2)  {
            return res.send(dto.respuesta(user));
        }
        else {
            //crear token
            const token = await generarToken({ email: user["usu_username"] });
            return res.send(dto.multiple(token, config.get('jwt.time'), user));
        }


    },

    async refreshToken(req, res) {
        const jwtPayload = res.locals.jwtPayload;
        const token = await generarToken(jwtPayload);
        return res.send(dto.single(token, config.get('jwt.time')));
    }
}