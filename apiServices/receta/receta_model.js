const conn = require('../../services/mysql/index');

module.exports = {
    // async create({
    //     nombre,
    //     descripcion,
    //     imagen,
    //     area,
    //     precio,
    // }) {
    //     return new Promise(function (resolve, reject) {
    //         conn.query('call sp_mantenedor_examen(?,?,?,?,?,?,?,?,?)', [
    //             2,
    //             "",
    //             "",
    //             0,
    //             nombre,
    //             descripcion,
    //             imagen,
    //             area,
    //             precio,
    //         ], function (err, rows) {
    //             try {
    //                 if (rows[0][0]["_exists"] != 0) {
    //                     resolve(1);
    //                 }
    //                 else {
    //                     return resolve(0)
    //                 }
    //             } catch (error) {
    //                 return resolve(-1);
    //             }
    //         });
    //     });
    // },

    // async update({
    //     id,
    //     nombre,
    //     descripcion,
    //     imagen,
    //     area,
    //     precio,
    // }) {
    //     return new Promise(function (resolve, reject) {
    //         conn.query('call sp_mantenedor_examen(?,?,?,?,?,?,?,?,?)', [
    //             3,
    //             "",
    //             "",
    //             id,
    //             nombre,
    //             descripcion,
    //             imagen,
    //             area,
    //             precio,
    //         ], function (err, rows) {
    //             try {
    //                 return resolve(1);
    //             } catch (error) {
    //                 return resolve(-1);
    //             }
    //         });
    //     });
    // },

    async list({
        id_cita,
    }) {
        return new Promise(function (resolve, reject) {
            conn.query('call sp_mantenedor_receta(?,?,?,?)', [
                1,
                0,
                "",
                id_cita
            ], function (err, rows) {
                try {
                    return resolve(rows[0]);
                } catch (error) {
                    return (-1);
                }

            });
        });
    },

    async listUsuario({
        id,
    }) {
        return new Promise(function (resolve, reject) {
            conn.query('call sp_mantenedor_receta(?,?,?,?)', [
                3,
                id,
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

    async listMedicamento({
        id_receta,
    }) {
        return new Promise(function (resolve, reject) {
            conn.query('call sp_mantenedor_det_rec_cit(?,?,?,?,?)', [
                1,
                id_receta,
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

    // async delete({
    //     id
    // }) {
    //     return new Promise(function (resolve, reject) {
    //         conn.query('call sp_mantenedor_examen(?,?,?,?,?,?,?,?,?)', [
    //             4,
    //             "",
    //             "",
    //             id,
    //             "",
    //             "",
    //             "",
    //             "",
    //             ""
    //         ], function (err, rows) {
    //             try {
    //                 return resolve(1);
    //             } catch (error) {
    //                 return resolve(-1);
    //             }
    //         });
    //     });
    // },
}