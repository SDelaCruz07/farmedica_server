const cita_model = require('./cita_model');
const receta_model = require('../receta/receta_model')
const dto = require('./cita_dto');

module.exports = {
    async listData(req, res) {
        const cita = await cita_model.listData({
            id_usuario: req.query.id_usuario,
        });
        var array_cita = [];
        for (let i = 0; i < cita.length; i++) {
            var object_cita = new Object();
                object_cita.codigo = cita[i]["cit_id"];
                object_cita.fecha = cita[i]["hor_fecha"];
                object_cita.hora_inicio = cita[i]["hor_hora_ini"];
                object_cita.hora_fin = cita[i]["hor_hora_fin"];
                object_cita.area_id = cita[i]["area_id"];
                object_cita.area_nombre = cita[i]["area_nombre"];
                object_cita.area_imagen = cita[i]["area_imagen"];
                object_cita.doctor_nombre = cita[i]["doc_nombre"];
                object_cita.doctor_apellido = cita[i]["doc_apellido"];
                object_cita.doctor_carnet = cita[i]["doc_carnet_cmp"];
                object_cita.doctor_imagen = cita[i]["doc_imagen"];
                object_cita.estado = cita[i]["cit_estado"];

            const receta = await receta_model.list({
                id_cita: cita[i]["cit_id"],
            });
            var array_receta = [];
            for (let index = 0; index < receta.length; index++) {
                var array_medicamento = [];
                var object_receta = new Object();
                object_receta.id = receta[index]["rec_id"];
                object_receta.numero = receta[index]["rec_numero"];
                object_receta.doctor_nombre = receta[index]["doc_nombre"];
                object_receta.doctor_apellido = receta[index]["doc_apellido"];
                array_medicamento = await receta_model.listMedicamento({
                    id_receta: receta[index]["rec_id"]
                })
                object_receta.medicamento = array_medicamento;
                array_receta.push(object_receta);
            }
            object_cita.receta = array_receta;
            array_cita.push(object_cita);
        }

        return res.send(dto.multiple(array_cita));
    },

    async create(req, res) {
        const cita = await cita_model.create({
            id_horario: req.body.id_horario,
            id_usuario: req.body.id_usuario,
        });
        return res.send(dto.respuesta(cita));
    },

    async update(req, res) {
        const cita = await cita_model.update({
            id: req.query.id,
            fecha_postergacion: req.body.fecha_postergacion
        });
        return res.send(dto.respuesta(cita));
    },

    async estado(req, res) {
        const cita = await cita_model.estado({
            id: req.query.id,
            estado: req.body.estado,
        });
        return res.send(dto.respuesta(cita));
    },

}