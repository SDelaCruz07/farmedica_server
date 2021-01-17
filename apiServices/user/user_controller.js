const user_model = require('./user_model');
const dto = require('./user_dto');

module.exports = {
    async create(req, res) {
        const user = await user_model.create({
            username: req.body.username,
            password: req.body.password,
            dni: req.body.dni,
            imagen: req.body.imagen,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            telefono: req.body.telefono,
            correo: req.body.correo,
        });
        console.log(user)
        return res.send(dto.respuesta(user));
    },

    async update(req, res) {
        const user = await user_model.update({
            id: req.query.id,
            username: req.body.username,
            imagen: req.body.imagen,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            telefono: req.body.telefono,
            correo: req.body.correo,
        });
        return res.send(dto.respuesta(user));
    },

    async getdata(req, res) {
        const user = await user_model.getdata({ id: req.query.id });
        return res.send(dto.multiple(user));
    },

}