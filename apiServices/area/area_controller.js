const area_model = require('./area_model');
const dto = require('./area_dto');

module.exports = {
    async list(req, res) {
        const area = await area_model.list();
        return res.send(dto.multiple(area));
    },

    async create(req, res) {
        const area = await area_model.create({
            descripcion: req.body.descripcion,
            nombre: req.body.nombre,
            imagen: req.body.imagen,
        });
        return res.send(dto.respuesta(area));
    },

    async update(req, res) {
        const area = await area_model.update({
            id: req.query.id,
            descripcion: req.body.descripcion,
            nombre: req.body.nombre,
            imagen: req.body.imagen,
        });
        return res.send(dto.respuesta(area));
    },

    async delete(req, res) {
        const area = await area_model.delete({
            id: req.query.id,
        });
        return res.send(dto.respuesta(area));
    },

}