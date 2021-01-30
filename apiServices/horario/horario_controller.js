const horario_model = require('./horario_model');
const dto = require('./horario_dto');

module.exports = {
    async list(req, res) {
        const horario = await horario_model.list({
            id_doctor: req.body.id_doctor,
            fecha: req.body.fecha,
        });
        return res.send(dto.multiple(horario));
    },

    async create(req, res) {
        const horario = await horario_model.create({
            fecha: req.body.fecha,
            hora_inicio: req.body.hora_inicio,
            hora_fin: req.body.hora_fin,
            consultorio: req.body.consultorio,
            id_doctor: req.body.id_doctor,
        });
        return res.send(dto.respuesta(horario));
    },

    async update(req, res) {
        const horario = await horario_model.update({
            id: req.query.id,
            fecha: req.body.fecha,
            hora_inicio: req.body.hora_inicio,
            hora_fin: req.body.hora_fin,
            consultorio: req.body.consultorio,
            id_doctor: req.body.id_doctor,
        });
        return res.send(dto.respuesta(horario));
    },

    async delete(req, res) {
        const horario = await horario_model.delete({
            id: req.query.id,
        });
        return res.send(dto.respuesta(horario));
    },

}