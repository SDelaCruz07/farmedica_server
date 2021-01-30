const requisito_model = require('./requisito_model');
const dto = require('./requisito_dto');

module.exports = {
    async list(req, res) {
        const requisito = await requisito_model.list({
            id_examen: req.query.id_examen,
        });
        return res.send(dto.multiple(requisito));
    },

    async create(req, res) {
        const requisito = await requisito_model.create({
            descripcion: req.body.descripcion,
            examen: req.body.examen,
        });
        return res.send(dto.respuesta(requisito));
    },

    async update(req, res) {
        const requisito = await requisito_model.update({
            id: req.query.id,
            descripcion: req.body.descripcion,
            examen: req.body.examen,
        });
        return res.send(dto.respuesta(requisito));
    },

    async delete(req, res) {
        const requisito = await requisito_model.delete({
            id: req.query.id,
        });
        return res.send(dto.respuesta(requisito));
    },

}