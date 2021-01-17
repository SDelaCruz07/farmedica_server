const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = {
    async checkjwt(req, res, next) {
        const token = req.headers['auth'];

        try {
            const jwtPayload = await jwt.verify(token, config.get('jwt.secret'));
            res.locals.jwtPayload = jwtPayload;
            next();
        } catch (error) {
            return res.status(401).json({ status: "Error", messenge: 'No Autorizado, no esta logueado' });
        }
    }
}