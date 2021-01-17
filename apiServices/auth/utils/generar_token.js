const config = require('config');
const jwt = require('jsonwebtoken');

const generarToken = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, config.get('jwt.secret'), { expiresIn: config.get('jwt.time') }, (err, token) => {
            if (err) {
                reject('No se pudo generar el token')
            } else {
                resolve(token);
            }
        })
    });
}

module.exports = {
    generarToken
}