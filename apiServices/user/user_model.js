const conn = require('../../services/mysql/index');
const helpers = require('../auth/utils/encrypt_password');

module.exports = {
    async create({
        username,
        password,
        dni,
        imagen,
        nombre,
        apellido,
        telefono,
        correo,
    }) {
        const passwordEncrypt = await helpers.encrypt_password(password);
        return new Promise(function (resolve, reject) {
            conn.query('call sp_mantenedor_user(?,?,?,?,?,?,?,?,?,?)', [
                1,
                0,
                username,
                passwordEncrypt,
                dni,
                imagen,
                nombre,
                apellido,
                telefono,
                correo
            ], function (err, rows) {
                try {
                    if (rows[0][0]["_exists"] != 0) {
                        resolve(1);
                    }
                    else {
                        return resolve(0)
                    }
                } catch (error) {
                    return resolve(-1);
                }
            });
        });
    },

    async update({
        id,
        username,
        imagen,
        nombre,
        apellido,
        telefono,
        correo,
    }) {
        return new Promise(function (resolve, reject) {
            conn.query('call sp_mantenedor_user(?,?,?,?,?,?,?,?,?,?)', [
                2,
                id,
                username,
                "",
                "",
                imagen,
                nombre,
                apellido,
                telefono,
                correo
            ], function (err, rows) {
                try {
                    return resolve(1);
                } catch (error) {
                    return resolve(-1);
                }
            });
        });
    },

    async getdata({ id }) {
        return new Promise(function (resolve, reject) {
            conn.query('call sp_mantenedor_user(?,?,?,?,?,?,?,?,?,?)', [
                3,
                id,
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""], function (err, rows) {
                    try {
                        return resolve(rows[0]);
                    } catch (error) {
                        return (-1);
                    }

                });
        });
    },
}