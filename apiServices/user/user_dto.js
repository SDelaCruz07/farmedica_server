const respuesta = (resource) => ({
    status: resource == -1 ? "Error": resource == 0 ? "Advertencia" : "Exito",
    message: resource == -1? "Oh no! ocurrio un error en la peticion": resource == 1? "Peticion exitosa" : "Ya exite el registro"
});

const single = (resource) => ({
    username: resource.usu_username,
    dni: resource.usu_dni,
    imagen: resource.usu_imagen, 
    nombre : resource.usu_nombre, 
    apellido : resource.usu_apellido, 
    telefono : resource.usu_telefono, 
    correo : resource.usu_correo, 
    created_at : resource.usu_created_at,
});

const multiple = (resources) =>({
    status: resources == -1 ? "Error": "Exito",
    data : resources.map((resource) => single(resource)),
}); 

module.exports = {
    respuesta,
    single,
    multiple,
}