const cita_model = require('./cita_model');
const dto = require('./cita_dto');

module.exports = {
    async listData(req, res) {
        const cita = await cita_model.listData({
            id_usuario: req.query.id_usuario,
        });
        return res.send(dto.multiple(cita));
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