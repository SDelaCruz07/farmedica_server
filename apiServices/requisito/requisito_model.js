const conn = require('../../services/mysql/index');

module.exports = {
    async create({
        descripcion,
        examen,
    }) {
        return new Promise(function (resolve, reject) {
            conn.query('call sp_mantenedor_requisito(?,?,?,?)', [
                2,
                0,
                descripcion,
                examen
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
        examen,
    }) {
        return new Promise(function (resolve, reject) {
            conn.query('call sp_mantenedor_requisito(?,?,?,?)', [
                3,
                id,
                descripcion,
                examen,
            ], function (err, rows) {
                try {
                    return resolve(1);
                } catch (error) {
                    return resolve(-1);
                }
            });
        });
    },

    async list({
        id_examen
    }) {
        return new Promise(function (resolve, reject) {
            conn.query('call sp_mantenedor_requisito(?,?,?,?)', [
                1,
                0,
                "",
                id_examen
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
            conn.query('call sp_mantenedor_requisito(?,?,?,?)', [
                4,
                id,
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