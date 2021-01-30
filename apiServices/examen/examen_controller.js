const examen_model = require('./examen_model');
const dto = require('./examen_dto');

module.exports = {
    async list(req, res) {
        const examen = await examen_model.list({
            area: req.body.area,
            fecha: req.body.fecha,
        });
        return res.send(dto.multiple(examen));
    },

    async create(req, res) {
        const examen = await examen_model.create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            area: req.body.area,
            precio: req.body.precio,
        });
        return res.send(dto.respuesta(examen));
    },

    async update(req, res) {
        const examen = await examen_model.update({
            id: req.query.id,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            area: req.body.area,
            precio: req.body.precio,
        });
        return res.send(dto.respuesta(examen));
    },

    async delete(req, res) {
        const examen = await examen_model.delete({
            id: req.query.id,
        });
        return res.send(dto.respuesta(examen));
    },

}