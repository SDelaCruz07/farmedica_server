const examen_model = require('./examen_model');
const dto = require('./examen_dto');
const requisito_model = require('../requisito/requisito_model');

module.exports = {
    async list(req, res) {
        const examen = await examen_model.list({
            area: req.body.area,
            turno: req.body.turno,
            fecha: req.body.fecha,
        });
        var array_examen = [];

        for (let index = 0; index < examen.length; index++) {
            var array_requisito = [];
            var object_examen = new Object();
            object_examen.id = examen[index]["horx_id"];
            object_examen.nombre = examen[index]["exa_nombre"];
            object_examen.descripcion = examen[index]["exa_descripcion"];
            object_examen.cola = examen[index]["horx_cola"];
            object_examen.imagen = examen[index]["exa_imagen"];
            object_examen.precio = examen[index]["exa_precio"];
            array_requisito = await requisito_model.list({
                id_examen: examen[index]["exa_id"]
            })
            object_examen.requisito = array_requisito;
            array_examen.push(object_examen);
        }
        return res.send(dto.multiple(array_examen));
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