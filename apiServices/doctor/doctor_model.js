const conn = require('../../services/mysql/index');

module.exports = {
    async create({
        nombre,
        apellido,
        carnet,
        area,
        imagen,
    }) {
        return new Promise(function (resolve, reject) {
            conn.query('call sp_mantenedor_doctor(?,?,?,?,?,?,?,?)', [
                2,
                "",
                0,
                nombre,
                apellido,
                carnet,
                area,
                imagen,
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
        nombre,
        apellido,
        carnet,
        area,
        imagen,
    }) {
        return new Promise(function (resolve, reject) {
            conn.query('call sp_mantenedor_doctor(?,?,?,?,?,?,?,?)', [
                3,
                "",
                id,
                nombre,
                apellido,
                carnet,
                area,
                imagen,
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
        area,
        fecha,
    }) {
        return new Promise(function (resolve, reject) {
            conn.query('call sp_mantenedor_doctor(?,?,?,?,?,?,?,?)', [
                1,
                fecha,
                0,
                "",
                "",
                "",
                area,
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

    async getLast({
        id
    }) {
        return new Promise(function (resolve, reject) {
            conn.query('call sp_mantenedor_doctor(?,?,?,?,?,?,?,?)', [
                5,
                "",
                id,
                "",
                "",
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
            conn.query('call sp_mantenedor_doctor(?,?,?,?,?,?,?,?)', [
                4,
                "",
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