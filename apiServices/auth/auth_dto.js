const respuesta = (resource) => ({
    status: resource == -1 ? "Error" : resource == -2 ? "Advertencia" : "Advertencia",
    message: resource == -1 ? "Oh no! ocurrio un error en la peticion" : resource == -2 ? "Contraseña incorrecta" : "El usuario no se encuentra registrado",
});

const single = (token, expiresIn) => ({
    auth: {
        token: token,
        expiresIn: expiresIn
    },
});

const multiple = (token, expiresIn, user) => ({
    auth: {
        token: token,
        expiresIn: expiresIn
    },
    user: {
        id: user.usu_id,
        username: user.username,
        dni: user.usu_dni,
        imagen: user.usu_imagen,
        nombre: user.usu_nombre,
        nombre: user.usu_apellido,
        nombre: user.usu_telefono,
        nombre: user.usu_correo,
        nombre: user.usu_estado,
        nombre: user.usu_created_at,
    }
});

module.exports = {
    respuesta,
    single,
    multiple,
}