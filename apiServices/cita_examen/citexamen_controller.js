const citexamen_model = require('./citexamen_model');
const dto = require('./citexamen_dto');

module.exports = {
    async listData(req, res) {
        const citexamen = await citexamen_model.listData({
            id_usuario: req.query.id_usuario,
        });
        return res.send(dto.multiple(citexamen));
    },

    async create(req, res) {
        const citexamen = await citexamen_model.create({
            id_horario: req.body.id_horario,
            id_usuario: req.body.id_usuario,
        });
        return res.send(dto.respuesta(citexamen));
    },

    async update(req, res) {
        const citexamen = await citexamen_model.update({
            id: req.query.id,
            fecha_postergacion: req.body.fecha_postergacion
        });
        return res.send(dto.respuesta_update(citexamen));
    },

    async estado(req, res) {
        const citexamen = await citexamen_model.estado({
            id: req.query.id,
            estado: req.body.estado,
        });
        console.log(citexamen);
        return res.send(dto.respuesta_estado(citexamen));
    },

}