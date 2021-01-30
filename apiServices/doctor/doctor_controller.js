const doctor_model = require('./doctor_model');
const dto = require('./doctor_dto');

module.exports = {
    async list(req, res) {
        const doctor = await doctor_model.list({
            area: req.body.area,
            fecha: req.body.fecha,
        });
        var array_doctor = [];

        for (let index = 0; index < doctor.length; index++) {
            var array_last = [];
            var object_doctor = new Object();
            object_doctor.id = doctor[index]["doc_id"];
            object_doctor.nombre = doctor[index]["doc_nombre"];
            object_doctor.apellido = doctor[index]["doc_apellido"];
            object_doctor.carnet = doctor[index]["doc_carnet_cmp"];
            object_doctor.imagen = doctor[index]["doc_imagen"];
            array_last = await doctor_model.getLast({
                id: doctor[index]["doc_id"]
            })
            object_doctor.last = array_last;
            array_doctor.push(object_doctor);
        }
        return res.send(dto.multiple(array_doctor));
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