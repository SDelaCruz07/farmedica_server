const conn = require('../../services/mysql/index');

module.exports = {
    async create({
        descripcion,
        nombre,
        imagen,
    }) {
        return new Promise(function (resolve, reject) {
            conn.query('call sp_mantenedor_area(?,?,?,?,?)', [
                2,
                0,
                descripcion,
                nombre,
                imagen
            ], function (err, rows) {
                try {
                    resolve(1);
                } catch (error) {
                    return resolve(-1);
                }
            });
        });
    },

    async update({
        id,
        descripcion,
        nombre,
        imagen,
    }) {
        return new Promise(function (resolve, reject) {
            conn.query('call sp_mantenedor_area(?,?,?,?,?)', [
                3,
                id,
                descripcion,
                nombre,
                imagen
            ], function (err, rows) {
                try {
                    return resolve(1);
                } catch (error) {
                    return resolve(-1);
                }
            });
        });
    },

    async list() {
        return new Promise(function (resolve, reject) {
            conn.query('call sp_mantenedor_area(?,?,?,?,?)', [
                1,
                0,
                "",
                "",
                ""
            ], function (err, rows) {
                try {
                    return resolve(rows[0]);
                } catch (error) {
                    return (-1);
                }

            });
        });
    },

    async delete({
        id
    }) {
        return new Promise(function (resolve, reject) {
            conn.query('call sp_mantenedor_area(?,?,?,?,?)', [
                4,
                id,
                "",
                "",
                ""
            ], function (err, rows) {
                try {
                    return resolve(1);
                } catch (error) {
                    return resolve(-1);
                }
            });
        });
    },
}