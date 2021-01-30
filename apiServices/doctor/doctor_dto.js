const respuesta = (resource) => ({
    status: resource == -1 ? "Error" : resource == 0 ? "Advertencia" : "Exito",
    message: resource == -1 ? "Oh no! ocurrio un error en la peticion" : resource == 1 ? "Peticion exitosa" : "Ya exite el registro"
});

const last = (resource) => ({
    imagen: resource.usu_imagen,
    total: resource.total
});

const single = (resource) => ({
    id: resource.id,
    nombre: resource.nombre,
    apellido: resource.apellido,
    carnet: resource.carnet,
    imagen: resource.imagen,
    last: resource.last.map((resource) => last(resource)), 
});

const multiple = (resources) => ({
    status: resources == -1 ? "Error" : "Exito",
    data: resources.map((resource) => single(resource)),
});

module.exports = {
    respuesta,
    single,
    multiple,
}