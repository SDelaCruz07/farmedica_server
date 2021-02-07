const receta_model = require('./receta_model');
const dto = require('./receta_dto');

module.exports = {
    async list(req, res) {
        const receta = await receta_model.list({
            id_cita: req.query.id_cita,
        });
        var array_receta = [];

        if (receta[0]["_exists_id"] == 0) {
            return res.send(dto.respuesta(receta));
        }

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
        return res.send(dto.multiple(array_receta));
    },

    // async create(req, res) {
    //     const receta = await receta_model.create({
    //         nombre: req.body.nombre,
    //         descripcion: req.body.descripcion,
    //         imagen: req.body.imagen,
    //         area: req.body.area,
    //         precio: req.body.precio,
    //     });
    //     return res.send(dto.respuesta(receta));
    // },

    // async update(req, res) {
    //     const receta = await receta_model.update({
    //         id: req.query.id,
    //         nombre: req.body.nombre,
    //         descripcion: req.body.descripcion,
    //         imagen: req.body.imagen,
    //         area: req.body.area,
    //         precio: req.body.precio,
    //     });
    //     return res.send(dto.respuesta(receta));
    // },

    // async delete(req, res) {
    //     const receta = await receta_model.delete({
    //         id: req.query.id,
    //     });
    //     return res.send(dto.respuesta(receta));
    // },

}