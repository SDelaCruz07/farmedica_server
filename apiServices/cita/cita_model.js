const conn = require('../../services/mysql/index');

module.exports = {
    async create({
        id_horario,
        id_usuario
    }) {
        return new Promise(function (resolve, reject) {
            conn.query('call sp_mantenedor_cita(?,?,?,?,?,?)', [
                2,
                0,
                id_horario,
                id_usuario,
                "",
                0
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
        fecha_postergacion
    }) {
        return new Promise(function (resolve, reject) {
            conn.query('call sp_mantenedor_cita(?,?,?,?,?,?)', [
                3,
                id,
                0,
                0,
                fecha_postergacion,
                0
            ], function (err, rows) {
                try {
                    return resolve(1);
                } catch (error) {
                    return resolve(-1);
                }
            });
        });
    },

    async listData({ id_usuario }) {
        return new Promise(function (resolve, reject) {
            conn.query('call sp_mantenedor_cita(?,?,?,?,?,?)', [
                1,
                0,
                0,
                id_usuario,
                "",
                0
            ], function (err, rows) {
                try {
                    return resolve(rows[0]);
                } catch (error) {
                    return (-1);
                }

            });
        });
    },

    async estado({
        id,
        estado
    }) {
        return new Promise(function (resolve, reject) {
            conn.query('call sp_mantenedor_cita(?,?,?,?,?,?)', [
                3,
                id,
                0,
                0,
                "",
                estado
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