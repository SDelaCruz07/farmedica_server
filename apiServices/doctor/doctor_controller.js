const doctor_model = require('./doctor_model');
const dto = require('./doctor_dto');

module.exports = {
    async list(req, res) {
        const doctor = await doctor_model.list({
            area: req.body.area,
            fecha: req.body.fecha,
        });
        return res.send(dto.multiple(doctor));
    },

    async create(req, res) {
        const doctor = await doctor_model.create({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            carnet: req.body.carnet,
            area: req.body.area,
            imagen: req.body.imagen,
        });
        return res.send(dto.respuesta(doctor));
    },

    async update(req, res) {
        const doctor = await doctor_model.update({
            id: req.query.id,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            carnet: req.body.carnet,
            area: req.body.area,
            imagen: req.body.imagen,
        });
        return res.send(dto.respuesta(doctor));
    },

    async delete(req, res) {
        const doctor = await doctor_model.delete({
            id: req.query.id,
        });
        return res.send(dto.respuesta(doctor));
    },

}