const conn = require('../../services/mysql/index');

module.exports = {
    async create({
        fecha,
        hora_inicio,
        hora_fin,
        consultorio,
        id_doctor,
    }) {
        return new Promise(function (resolve, reject) {
            conn.query('call sp_mantenedor_horario(?,?,?,?,?,?,?)', [
                2,
                0,
                fecha,
                hora_inicio,
                hora_fin,
                consultorio,
                id_doctor,
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
        fecha,
        hora_inicio,
        hora_fin,
        consultorio,
        id_doctor,
    }) {
        return new Promise(function (resolve, reject) {
            conn.query('call sp_mantenedor_horario(?,?,?,?,?,?,?)', [
                3,
                id,
                fecha,
                hora_inicio,
                hora_fin,
                consultorio,
                id_doctor,
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
        id_doctor,
        fecha,
    }) {
        return new Promise(function (resolve, reject) {
            conn.query('call sp_mantenedor_horario(?,?,?,?,?,?,?)', [
                1,
                0,
                fecha,
                "",
                "",
                "",
                id_doctor
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
            conn.query('call sp_mantenedor_horario(?,?,?,?,?,?,?)', [
                4,
                id,
                "",
                "",
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